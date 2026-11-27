(function(){
function mount(){
 var a=[...document.querySelectorAll('a')].find(x=>(x.textContent||'').trim()==='Скидки'&&/Последние/.test(x.getAttribute('href')||''));if(!a)return;
 if(!document.getElementById('mt-footer-sale')){var c=document.createElement('style');c.id='mt-footer-sale';c.textContent='a[href*="%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B8%D0%B5"]{color:#e2602f!important}a[href*="%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B8%D0%B5"]:hover{color:#fff!important}';document.head.appendChild(c)}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
var iv=setInterval(mount,1000);setTimeout(function(){clearInterval(iv)},15000);
})();
