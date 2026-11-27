(function(){
var K='mt-catalog-inline';
if(document.getElementById(K))return;
var CAT='https://muscletribe.ru/catalog?tfc_storepartuid%5B1780716421%5D=';
var TILES=[
 ['Футболки',CAT+encodeURIComponent('Футболки')+'&tfc_div=:::'],
 ['Худи',CAT+encodeURIComponent('Худи')+'&tfc_div=:::'],
 ['Шапки',CAT+encodeURIComponent('Шапки')+'&tfc_div=:::'],
 ['Штаны',CAT+encodeURIComponent('Штаны')+'&tfc_div=:::'],
 ['Носки',CAT+encodeURIComponent('Носки')+'&tfc_div=:::'],
 ['Аксессуары',CAT+encodeURIComponent('Аксессуары')+'&tfc_div=:::'],
 ['Скидки','https://muscletribe.ru/catalog?tfc_storepartuid%5B755203572753%5D=on']
];
var CSS='#'+K+'.mt-cat{clear:both;margin:0 auto 40px;padding:0 16px;max-width:1320px;font:14px/1.5 Manrope,Arial,sans-serif;color:#191919}'
+'#'+K+' .mt-h{font-size:30px;letter-spacing:.14em;font-weight:800;text-transform:uppercase;margin:0 0 22px;color:#e2602f}'
+'#'+K+' .mt-tiles{display:grid;grid-template-columns:repeat(7,1fr);gap:10px;margin-bottom:24px}'
+'#'+K+' .mt-tile{display:block;padding:16px 8px;border:1px solid #e6e6e6;border-radius:2px;background:#fff;color:#191919;text-decoration:none;font-size:13px;font-weight:700;text-align:center;letter-spacing:.04em}'
+'#'+K+' .mt-tile:hover{border-color:#e2602f;color:#e2602f}'
+'#'+K+' .mt-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px}'
+'#'+K+' .mt-grid .mt-card{width:100%!important;flex:none!important;background:#fff}'
+'#'+K+' .mt-all{display:block;margin:26px auto 0;padding:14px 24px;max-width:420px;text-align:center;border:1px solid #191919;color:#191919;text-decoration:none;text-transform:uppercase;letter-spacing:.1em;font-size:12px;font-weight:700}'
+'#'+K+' .mt-all:hover{background:#191919;color:#fff}'
+'@media(max-width:900px){#'+K+' .mt-tiles{grid-template-columns:repeat(2,1fr)}#'+K+' .mt-h{font-size:23px}}';
function build(){
 var root=document.getElementById('mt-catalog-carousel');if(!root||document.getElementById(K))return;
 var rows=[...root.querySelectorAll('.mt-row')];if(rows.length<4)return;
 var popular=rows[0],banners=rows[1],seasonal=rows[2],headAcc=rows[3],last=rows.find(function(r){return /последние размеры/i.test((r.textContent||''))});
 // hide native "ПОПУЛЯРНЫЕ ТОВАРЫ" heading block
 var native=document.getElementById('rec1520457801');if(native)native.style.setProperty('display','none','important');
 var btn=document.getElementById('rec1817139781');if(btn)btn.style.setProperty('display','none','important');
 // wrap = catalog block
 var wrap=document.createElement('div');wrap.id=K;wrap.className='mt-cat';
 var st=document.createElement('style');st.textContent=CSS;wrap.appendChild(st);
 var h=document.createElement('div');h.className='mt-h';h.textContent='Каталог MUSCLE TRIBE';wrap.appendChild(h);
 var tiles=document.createElement('div');tiles.className='mt-tiles';
 TILES.forEach(function(t){var a=document.createElement('a');a.className='mt-tile';a.href=t[1];a.textContent=t[0];tiles.appendChild(a)});
 wrap.appendChild(tiles);
 var grid=document.createElement('div');grid.className='mt-grid';
 var seen={},uniq=[];
 [].concat(popular,headAcc,seasonal).forEach(function(row){if(!row)return;[...row.querySelectorAll('.mt-card')].forEach(function(c){if(!seen[c.href]){seen[c.href]=1;uniq.push(c)}})});
 uniq.slice(0,12).forEach(function(c){var cl=c.cloneNode(true);cl.removeAttribute('style');grid.appendChild(cl)});
 wrap.appendChild(grid);
 var all=document.createElement('a');all.className='mt-all';all.href='https://muscletribe.ru/catalog';all.textContent='Смотреть весь каталог →';wrap.appendChild(all);
 // restructure: seasonal BEFORE catalog; popular AFTER catalog (as seasonal-popular)
 root.insertBefore(seasonal,wrap);
 root.appendChild(popular);
 if(headAcc&&headAcc!==popular)root.appendChild(headAcc);
 if(last)root.appendChild(last);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(build,1100)});else setTimeout(build,1100);
var iv=setInterval(build,2000);setTimeout(function(){clearInterval(iv)},30000);
})();
