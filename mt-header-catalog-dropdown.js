(function(){
// Desktop dropdown under header "Каталог": section links, same as mobile subnav.
var B='https://muscletribe.ru/catalog?tfc_storepartuid%5B1780716421%5D=';
var CATS=[
 {n:'Футболки',u:'%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B8'},
 {n:'Худи',u:'%D0%A5%D1%83%D0%B4%D0%B8'},
 {n:'Шапки',u:'%D0%A8%D0%B0%D0%BF%D0%BA%D0%B8'},
 {n:'Штаны',u:'%D0%A8%D1%82%D0%B0%D0%BD%D1%8B'},
 {n:'Носки',u:'%D0%9D%D0%BE%D1%81%D0%BA%D0%B8'},
 {n:'Аксессуары',u:'%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B'},
 {n:'Последние размеры',u:'%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B8%D0%B5%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B'}
];
var CSS='#mt-catalog-drop{position:absolute;top:100%;left:0;z-index:60;min-width:190px;background:#fff;padding:8px 6px;border:1px solid var(--mt-line);border-radius:8px;box-shadow:0 10px 26px rgba(0,0,0,.12);display:none;font-family:var(--mt-font-ui)}#mt-catalog-drop a{display:block;padding:6px 10px;font-size:12px;color:var(--mt-ink);text-decoration:none;border-radius:5px;transition:background .15s,color .15s}#mt-catalog-drop a:hover{color:var(--mt-accent);background:rgba(226,96,47,.08)}.mt-cat-wrap{position:relative!important}.mt-cat-wrap:hover #mt-catalog-drop,.mt-cat-wrap:focus-within #mt-catalog-drop{display:block}@media(max-width:900px){#mt-catalog-drop{display:none!important}}';
function mount(){
 var a=[].slice.call(document.querySelectorAll('#t-header a')).filter(function(x){return (x.getAttribute('href')||'')==='/catalog'&&x.classList.contains('t-menu__link-item')})[0];
 if(!a)return;var w=a.closest('.t-menu__link-wrapper')||a.parentElement;if(!w||w.querySelector('#mt-catalog-drop'))return;
 var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);w.classList.add('mt-cat-wrap');
 var d=document.createElement('div');d.id='mt-catalog-drop';d.innerHTML=CATS.map(function(c){return '<a href="'+B+c.u+'&tfc_div=:::">'+c.n+'</a>'}).join('');w.appendChild(d);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
var iv=setInterval(function(){if(document.querySelector('#mt-catalog-drop'))clearInterval(iv);else mount()},1200);setTimeout(function(){clearInterval(iv)},15000);
})();
