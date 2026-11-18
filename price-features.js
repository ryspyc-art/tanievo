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
    fetch("./products.json",{cache:"no-store"}).then(r=>r.ok?r.json():null).catch(()=>null),
    fetch("./price-history.json",{cache:"no-store"}).then(r=>r.ok?r.json():null).catch(()=>null)
  ]).then(([catalog,history])=>{
    const items=Array.isArray(catalog?.items)?catalog.items:[];
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
    const cards=Object.entries(records).map(([id,points])=>{
      if(!Array.isArray(points)||!points.length)return "";
      const valid=points.filter(p=>Number(p.price)>0&&/^\d{4}-\d{2}-\d{2}$/.test(p.date)).sort((a,b)=>a.date.localeCompare(b.date));
      if(!valid.length)return "";
      const latest=valid[valid.length-1],values=valid.map(p=>Number(p.price)),min=Math.min(...values),max=Math.max(...values),span=max-min||1;
      const coords=values.map((v,i)=>{const x=4+(i/(Math.max(1,values.length-1)))*192,y=54-((v-min)/span)*44;return x.toFixed(1)+","+y.toFixed(1)}).join(" ");
      const name=latest.name||id;
      return '<article class="history-item"><h3>'+esc(name)+'</h3><p class="history-current">'+money(latest.price)+'</p><p>'+valid.length+' pomiarów · '+dateLabel(valid[0].date)+' – '+dateLabel(latest.date)+'</p><svg viewBox="0 0 200 64" role="img" aria-label="Wykres historii cen"><polyline points="'+coords+'" fill="none" stroke="#6f9c35" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><p>Zakres zapisanych cen: '+money(min)+' – '+money(max)+'</p></article>';
    }).filter(Boolean);
    historyRoot.innerHTML=cards.length?'<div class="history-list">'+cards.join("")+'</div>':'<p class="history-empty">Brak zapisanych pomiarów. Historia zacznie się tworzyć automatycznie po kolejnych aktualizacjach feedu. Nie pokazujemy przykładowych ani wymyślonych cen.</p>';
  }).catch(()=>{
    dealRoot.innerHTML='<p class="history-empty">Nie udało się pobrać katalogu. Spróbuj ponownie później.</p>';
    historyRoot.innerHTML='<p class="history-empty">Historia cen jest chwilowo niedostępna.</p>';
  });
})();
