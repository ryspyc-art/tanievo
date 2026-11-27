(function(){
  "use strict";
  const dealRoot=document.getElementById("dealOfDay");
  if(!dealRoot)return;
  const money=value=>Number(value).toLocaleString("pl-PL",{style:"currency",currency:"PLN"});
  const esc=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const safeUrl=value=>{try{const u=new URL(value);return u.protocol==="https:"?u.href:""}catch{return""}};
  const dateLabel=value=>{const d=new Date(value);return Number.isFinite(d.getTime())?d.toLocaleDateString("pl-PL"):"data nieznana"};
  fetch("./data/catalog/manifest.json",{cache:"no-store"}).then(r=>r.ok?r.json():null).then(async manifest=>{
    const firstFile=manifest?.files?.[0]?.file;
    const catalog=firstFile?await fetch("./data/catalog/"+encodeURIComponent(firstFile),{cache:"default"}).then(r=>r.ok?r.json():null).catch(()=>null):null;
    const items=Array.isArray(catalog?.items)?catalog.items:[];
    const fresh=items.filter(p=>p&&Number(p.price)>0&&p.currency==="PLN"&&safeUrl(p.productUrl)&&p.updatedAt&&Date.now()-Date.parse(p.updatedAt)>=0&&Date.now()-Date.parse(p.updatedAt)<=72*3600000);
    if(!fresh.length){
      dealRoot.innerHTML='<p class="history-empty">Brak aktualnej oferty z potwierdzoną ceną. Okazja pojawi się po aktualizacji danych partnerskich.</p>';
      return;
    }
    const day=Math.floor(Date.now()/86400000);
    const product=[...fresh].sort((a,b)=>String(a.id).localeCompare(String(b.id)))[day%fresh.length];
    const url=safeUrl(product.productUrl),image=safeUrl(product.image);
    dealRoot.innerHTML='<article class="deal-product">'+(image?'<img src="'+esc(image)+'" alt="'+esc(product.name)+'" loading="lazy" decoding="async">':'<span class="deal-icon" aria-hidden="true">🏷️</span>')+'<div><h3>'+esc(product.name)+'</h3><p>'+esc(product.merchant||"Sklep partnerski")+' · aktualizacja '+dateLabel(product.updatedAt)+'</p><a class="deal-link" href="'+esc(url)+'" target="_blank" rel="sponsored nofollow noopener noreferrer">Sprawdź ofertę ↗</a></div><strong class="deal-price">'+money(product.price)+'</strong></article>';
  }).catch(()=>{dealRoot.innerHTML='<p class="history-empty">Aktualna oferta jest chwilowo niedostępna.</p>';});
})();