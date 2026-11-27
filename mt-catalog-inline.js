(function(){
var K='mt-catalog-inline';
if(document.getElementById(K))return;
var CSS='#'+K+'.mt-cat{clear:both;margin:34px auto;padding:0 16px;max-width:1320px;font:14px/1.45 Manrope,Arial,sans-serif}'
+'#'+K+' .mt-h{font-size:26px;font-weight:800;margin:0 0 16px;color:#e2602f;text-transform:uppercase}'
+'#'+K+' .mt-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:22px}'
+'#'+K+' .mt-tile{display:block;padding:14px 12px;border:1px solid #333;border-radius:10px;background:#1b1b1b;color:#eee;text-decoration:none;font-weight:700;text-align:center}'
+'#'+K+' .mt-tile:hover{border-color:#e2602f;color:#e2602f}'
+'#'+K+' .mt-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px}'
+'#'+K+' .mt-grid .mt-card{width:100%!important;flex:none!important}';
var TILES=[
 ['Футболки','https://muscletribe.ru/catalog?tfc_storepartuid%5B377605268422%5D=on'],
 ['Худи','https://muscletribe.ru/catalog?tfc_storepartuid%5B840956369503%5D=on'],
 ['Шапки','https://muscletribe.ru/catalog?tfc_storepartuid%5B288428792103%5D=on'],
 ['Штаны','https://muscletribe.ru/catalog?tfc_storepartuid%5B735345935242%5D=on'],
 ['Носки','https://muscletribe.ru/catalog?tfc_storepartuid%5B619819505142%5D=on'],
 ['Аксессуары','https://muscletribe.ru/catalog?tfc_storepartuid%5B915480056633%5D=on'],
 ['Скидки','https://muscletribe.ru/catalog?tfc_storepartuid%5B755203572753%5D=on']
];
function build(){
 var root=document.getElementById('mt-catalog-carousel');if(!root||document.getElementById(K))return;
 var cards=[...root.querySelectorAll('.mt-card')].filter(function(a){return !(a.closest('.mt-row')&&/последние размеры/i.test((a.closest('.mt-row').textContent||'')))});
 if(cards.length<4)return;
 var seen={},uniq=[];cards.forEach(function(c){if(!seen[c.href]){seen[c.href]=1;uniq.push(c)}});
 var wrap=document.createElement('div');wrap.id=K;wrap.className='mt-cat';
 var st=document.createElement('style');st.textContent=CSS;wrap.appendChild(st);
 var h=document.createElement('div');h.className='mt-h';h.textContent='Каталог MUSCLE TRIBE';wrap.appendChild(h);
 var tiles=document.createElement('div');tiles.className='mt-tiles';
 TILES.forEach(function(t){var a=document.createElement('a');a.className='mt-tile';a.href=t[1];a.textContent=t[0];tiles.appendChild(a)});
 wrap.appendChild(tiles);
 var grid=document.createElement('div');grid.className='mt-grid';
 uniq.slice(0,12).forEach(function(c){var cl=c.cloneNode(true);cl.removeAttribute('style');grid.appendChild(cl)});
 wrap.appendChild(grid);
 var all=document.createElement('a');all.className='mt-tile';all.href='https://muscletribe.ru/catalog';all.textContent='Смотреть весь каталог →';all.style.marginTop='16px';wrap.appendChild(all);
 var rows=[...root.querySelectorAll('.mt-row')];
 var anchor=rows.find(function(r){return r.querySelector('.mt-banners')})||rows[0];
 if(anchor&&anchor.nextSibling)root.insertBefore(wrap,anchor.nextSibling);else root.appendChild(wrap);
 var btn=document.getElementById('rec1817139781');if(btn)btn.style.setProperty('display','none','important');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(build,900)});else setTimeout(build,900);
var iv=setInterval(build,1500);setTimeout(function(){clearInterval(iv)},25000);
})();
