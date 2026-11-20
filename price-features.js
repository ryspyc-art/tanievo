(function(){
  "use strict";
  const dealRoot=document.getElementById("dealOfDay");
  const historyRoot=document.getElementById("priceHistory");
  if(!dealRoot||!historyRoot)return;
  const money=value=>Number(value).toLocaleString("pl-PL",{style:"currency",currency:"PLN"});
  const esc=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const safeUrl=value=>{try{const u=new URL(value);return u.protocol==="https:"?u.href:""}catch{return""}};
  const dateLabel=value=>{const d=new Date(value);return Number.isFinite(d.getTime())?d.toLocaleDateString("pl-PL"):"data nieznana"};
  Promise.all([
    fetch("./data/catalog/manifest.json",{cache:"no-store"}).then(r=>r.ok?r.json():null).catch(()=>null),
    fetch("./data/price-history/manifest.json",{cache:"no-store"}).then(r=>r.ok?r.json():null).catch(()=>null)
  ]).then(async ([catalogManifest,historyManifest])=>{
    const firstCatalogFile=catalogManifest?.files?.[0]?.file;
    const firstCatalog=firstCatalogFile?await fetch("./data/catalog/"+encodeURIComponent(firstCatalogFile),{cache:"default"}).then(r=>r.ok?r.json():null).catch(()=>null):null;
    const historyParts=await Promise.all((historyManifest?.files||[]).map(entry=>fetch("./data/price-history/"+encodeURIComponent(entry.file),{cache:"default"}).then(r=>r.ok?r.json():null).catch(()=>null)));
    const catalog={items:Array.isArray(firstCatalog?.items)?firstCatalog.items:[]};
    const history={products:Object.assign({},...historyParts.map(part=>part?.products||{}))};
    const items=Array.isArray(catalog.items)?catalog.items:[];
    const fresh=items.filter(p=>p&&Number(p.price)>0&&p.currency==="PLN"&&safeUrl(p.productUrl)&&p.updatedAt&&Date.now()-Date.parse(p.updatedAt)>=0&&Date.now()-Date.parse(p.updatedAt)<=72*3600000);
    if(!fresh.length){
      dealRoot.innerHTML='<p class="history-empty">Aktualnie nie ma świeżych ofert z potwierdzoną ceną. Moduł pokaże okazję, gdy katalog otrzyma dane z aktywnego feedu partnerskiego.</p>';
    }else{
      const day=Math.floor(Date.now()/86400000);
      const product=[...fresh].sort((a,b)=>String(a.id).localeCompare(String(b.id)))[day%fresh.length];
      const url=safeUrl(product.productUrl),image=safeUrl(product.image);
      dealRoot.innerHTML='<article class="deal-product">'+(image?'<img src="'+esc(image)+'" alt="">':'<span class="deal-icon" aria-hidden="true">🏷️</span>')+'<div><h3>'+esc(product.name)+'</h3><p>'+esc(product.merchant||"Sklep partnerski")+' · cena z '+dateLabel(product.updatedAt)+'</p><p>Wyróżniona oferta z aktualnego katalogu</p><a class="deal-link" href="'+esc(url)+'" target="_blank" rel="sponsored nofollow noopener noreferrer">Sprawdź u sprzedawcy ↗</a></div><strong class="deal-price">'+money(product.price)+'</strong></article>';
    }
    const records=history&&history.products&&typeof history.products==="object"?history.products:{};
    // Grupuj historię po znormalizowanej nazwie, aby ten sam produkt nie pojawiał się kilka razy.
    const normalizeProductName=value=>String(value||"").toLocaleLowerCase("pl").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g," ").trim();
    const grouped=new Map();
    Object.entries(records).forEach(([id,points])=>{
      if(!Array.isArray(points))return;
      const valid=points.filter(p=>Number(p.price)>0&&/^\d{4}-\d{2}-\d{2}$/.test(p.date));
      if(!valid.length)return;
      const label=valid[valid.length-1].name||id;
      const key=normalizeProductName(label);
      if(!key)return;
      if(!grouped.has(key))grouped.set(key,{name:label,points:[]});
      grouped.get(key).points.push(...valid);
    });
    const cards=[...grouped.values()].slice(0,24).map(group=>{
      // Dla duplikatów z tego samego dnia pokazujemy jedną cenę: najniższą.
      const byDate=new Map();
      group.points.forEach(point=>{
        const current=byDate.get(point.date);
        if(!current||Number(point.price)<Number(current.price))byDate.set(point.date,point);
      });
      const valid=[...byDate.values()].sort((a,b)=>a.date.localeCompare(b.date));
      if(!valid.length)return "";
      const latest=valid[valid.length-1],values=valid.map(p=>Number(p.price)),min=Math.min(...values),max=Math.max(...values),span=max-min||1;
      const coords=values.map((v,i)=>{const x=4+(i/(Math.max(1,values.length-1)))*192,y=54-((v-min)/span)*44;return x.toFixed(1)+","+y.toFixed(1)}).join(" ");
      const name=latest.name||group.name;
      const image=safeUrl(latest.image);
      const historyUrl=safeUrl(latest.productUrl||latest.url) ||
        (/aliexpress/i.test(String(latest.merchant||"")) ? "https://www.aliexpress.com/w/wholesale-"+encodeURIComponent(name)+".html" : "");
      const cardContent=(image?'<div class="history-product-visual"><img src="'+esc(image)+'" alt="'+esc(name)+'" loading="lazy" decoding="async"></div>':'<div class="history-product-visual history-product-placeholder" aria-hidden="true">📦</div>')+'<h3>'+esc(name)+'</h3><p class="history-current">'+money(latest.price)+'</p><p>'+valid.length+' pomiarów · '+dateLabel(valid[0].date)+' – '+dateLabel(latest.date)+'</p><svg viewBox="0 0 200 64" role="img" aria-label="Wykres historii cen"><polyline points="'+coords+'" fill="none" stroke="#6f9c35" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><p>Zakres zapisanych cen: '+money(min)+' – '+money(max)+'</p>';
      return '<article class="history-item">'+(historyUrl?'<a class="history-card-link" href="'+esc(historyUrl)+'" target="_blank" rel="sponsored nofollow noopener noreferrer" aria-label="Otwórz produkt: '+esc(name)+'">'+cardContent+'</a>':cardContent)+'</article>';
    }).filter(Boolean);
    historyRoot.innerHTML=cards.length?'<div class="history-list">'+cards.join("")+'</div>':'<p class="history-empty">Brak zapisanych pomiarów. Historia zacznie się tworzyć automatycznie po kolejnych aktualizacjach feedu. Nie pokazujemy przykładowych ani wymyślonych cen.</p>';
  }).catch(()=>{
    dealRoot.innerHTML='<p class="history-empty">Nie udało się pobrać katalogu. Spróbuj ponownie później.</p>';
    historyRoot.innerHTML='<p class="history-empty">Historia cen jest chwilowo niedostępna.</p>';
  });
})();
