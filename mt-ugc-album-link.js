(function(){
function mount(){
 if(!//tproduct\//.test(location.pathname))return;
 var strip=document.querySelector('.mt-live-strip');if(!strip)return;
 if(document.querySelector('.mt-ugc-prompt'))return;
 if(!document.getElementById('mt-family-album'))strip.id='mt-family-album';
 var d=document.querySelector('.t-store__prod-popup__descr')||document.querySelector('.t-store__product-snippet__descr');
 if(!d)return;
 var css=document.getElementById('mt-ugc-prompt-css');
 if(!css){css=document.createElement('style');css.id='mt-ugc-prompt-css';
 css.textContent='.mt-ugc-prompt{font:14px/1.5 var(--mt-font-ui,Manrope,Arial,sans-serif);color:var(--mt-muted,#757575);margin:18px 0 0}.mt-ugc-prompt a{color:var(--mt-accent,#e2602f);font-weight:700;text-decoration:none;border-bottom:1px dashed rgba(226,96,47,.5);cursor:pointer}.mt-ugc-prompt a:hover{border-bottom-style:solid}';
 document.head.appendChild(css)}
 var p=document.createElement('p');p.className='mt-ugc-prompt';
 p.innerHTML='Купили? <a href="#mt-family-album">Кинь фото в Семейный альбом →</a> — и получи промокод на следующий заказ.';
 d.parentNode.insertBefore(p,d.nextSibling);
 p.querySelector('a').addEventListener('click',function(e){
  e.preventDefault();strip.scrollIntoView({behavior:'smooth',block:'center'});
  var btn=strip.querySelector('.mt-live-strip__add')||document.querySelector('.mt-live-addbtn');
  if(btn)setTimeout(function(){btn.click()},450);
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
var iv=setInterval(mount,1000);setTimeout(function(){clearInterval(iv)},15000);
})();
