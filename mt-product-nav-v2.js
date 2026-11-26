(function(){
// Breadcrumb v2: Главная / Каталог / Раздел. Align to main photo, no sections row.
var uid=(location.pathname.match(/\/tproduct\/(\d+)/)||[])[1];if(!uid)return;
var B='https://muscletribe.ru/catalog?tfc_storepartuid%5B1780716421%5D=';
var CATS=[
 {n:'Футболки',u:'%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B8',p:'377605268422'},
 {n:'Худи',u:'%D0%A5%D1%83%D0%B4%D0%B8',p:'840956369503'},
 {n:'Шапки',u:'%D0%A8%D0%B0%D0%BF%D0%BA%D0%B8',p:'288428792103'},
 {n:'Штаны',u:'%D0%A8%D1%82%D0%B0%D0%BD%D1%8B',p:'735345935242'},
 {n:'Носки',u:'%D0%9D%D0%BE%D1%81%D0%BA%D0%B8',p:'619819505142'},
 {n:'Аксессуары',u:'%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B',p:'915480056633'},
 {n:'Последние размеры',u:'%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B8%D0%B5%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B',p:'755203572753'}
];
var CSS='#mt-prodnav{font-family:var(--mt-font-ui);font-size:12px;line-height:1.5;color:var(--mt-muted);margin:0 0 14px}#mt-prodnav a{color:var(--mt-muted);text-decoration:none;border-radius:4px;padding:1px 3px;transition:color .15s,background .15s}#mt-prodnav a:hover{color:var(--mt-accent);background:rgba(226,96,47,.08)}#mt-prodnav .sep{margin:0 6px;color:var(--mt-line)}#mt-prodnav .cur{color:var(--mt-ink)}';
function mount(cat){
 var root=document.querySelector('.js-store-product')||document.querySelector('.t-store__product-snippet');if(!root||root.querySelector('#mt-prodnav'))return;
 var nav=document.createElement('nav');nav.id='mt-prodnav';var st=document.createElement('style');st.textContent=CSS;nav.appendChild(st);
 nav.innerHTML='<a href="https://muscletribe.ru/">Главная</a><span class="sep">/</span><a href="https://muscletribe.ru/catalog">Каталог</a><span class="sep">/</span><span class="cur">'+(cat?cat.n:'Каталог')+'</span>';
 root.insertBefore(nav,root.firstChild);
 var sl=document.querySelector('.js-store-prod-slider')||document.querySelector('.t-store__prod-popup__gallery');
 if(sl&&root.contains(sl)){nav.style.width=sl.offsetWidth+'px';nav.style.marginLeft=sl.offsetLeft+'px'}
}
var HOST='https://store.tildaapi.com/api/getproductslist/?recid=mt&getparts=true&getoptions=true&slice=1&size=100&flag_root=withroot&storepartuid=';
Promise.all(CATS.map(function(c){return fetch(HOST+c.p,{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){return {c:c,list:j.products||[]}}).catch(function(){return {c:c,list:[]}})})).then(function(res){var found=null;res.forEach(function(r){if(!found&&r.list.some(function(p){return String(p.uid)===uid}))found=r.c});mount(found)}).catch(function(){mount(null)});
})();
