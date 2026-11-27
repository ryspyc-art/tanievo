(() => {
  const root = document.getElementById('couponList');
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const asDate = (v) => new Date(v + 'T00:00:00');
  const expired = (c) => c.ends && asDate(c.ends) < today;
  const future = (c) => c.starts && asDate(c.starts) > today;
  const card = (c) => {
    const el = document.createElement('article'); el.className = 'coupon-card';
    const status = document.createElement('span'); status.className = 'coupon-status';
    status.textContent = future(c) ? 'WKRÓTCE' : (c.verified ? 'ZWERYFIKOWANY' : 'DO WERYFIKACJI');
    if (!c.verified) status.classList.add('pending'); if (future(c)) status.classList.add('future');
    const title = document.createElement('h2'); title.textContent = c.partner || '';
    const desc = document.createElement('p'); desc.textContent = c.description || '';
    const wrap = document.createElement('div'); wrap.className = 'coupon-code';
    const code = document.createElement('code'); code.textContent = c.code || '';
    const copy = document.createElement('button'); copy.type = 'button'; copy.textContent = 'Kopiuj kod';
    copy.addEventListener('click', async () => { try { await navigator.clipboard.writeText(c.code); copy.textContent = 'Skopiowano!'; } catch { copy.textContent = 'Kopiowanie niedostępne'; } });
    wrap.append(code, copy);
    const meta = document.createElement('p'); meta.className = 'coupon-meta'; meta.textContent = 'Ważny: ' + (c.starts || '?') + ' – ' + (c.ends || '?') + (c.verified ? ' · Zweryfikowany' : ' · Niepotwierdzony');
    el.append(status,title,desc,wrap,meta);
    if (c.url) { const actions=document.createElement('div'); actions.className='coupon-actions'; const link=document.createElement('a'); link.href=c.url; link.target='_blank'; link.rel='sponsored nofollow noopener noreferrer'; link.textContent='Skorzystaj z promocji ↗'; actions.append(link); el.append(actions); }
    return el;
  };
  fetch('kupony.json', {cache:'no-store'}).then(r => { if (!r.ok) throw new Error(); return r.json(); }).then(data => {
    const list = (Array.isArray(data.coupons) ? data.coupons : []).filter(c => !expired(c));
    const active = list.filter(c => !future(c)); const upcoming = list.filter(future);
    if (!list.length) { root.innerHTML='<section class="coupon-empty"><div class="coupon-empty-icon">%</div><h2>Brak aktualnych kuponów</h2><p>Nie publikujemy wygasłych kodów ani promocji bez potwierdzonych warunków. Nowe okazje pojawią się tutaj po weryfikacji.</p><a href="index.html#oferty" class="coupon-cta">Przejdź do aktualnych ofert ↗</a></section>'; return; }
    root.replaceChildren();
    if (active.length) { const grid=document.createElement('div'); grid.className='coupon-list'; active.forEach(c=>grid.append(card(c))); root.append(grid); }
    if (upcoming.length) { const h=document.createElement('h2'); h.textContent='Nadchodzące promocje'; root.append(h); const grid=document.createElement('div'); grid.className='coupon-list'; upcoming.forEach(c=>grid.append(card(c))); root.append(grid); }
  }).catch(() => { root.textContent='Nie udało się wczytać kuponów. Spróbuj ponownie później.'; });
})();