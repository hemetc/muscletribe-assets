(function(){
var K='mt-ugc-showcase';
if(document.getElementById(K))return;
function mount(){
 if(location.pathname.indexOf('/tproduct/')<0)return;
 var uid=(location.pathname.match(/\/tproduct\/(\d+)/)||[])[1];if(!uid)return;
 var prompt=document.getElementById('mt-ugc-prompt');if(!prompt||prompt.dataset.show)return;
 prompt.dataset.show='1';
 var box=document.createElement('div');box.id=K;
 box.style.cssText='display:flex;gap:8px;flex-wrap:wrap;margin:12px 0 0';
 prompt.parentNode.insertBefore(box,prompt.nextSibling);
 fetch('https://script.google.com/macros/s/AKfycbwaIJvy6yByqY0UCHCZUZZObMDosPUJGUdUnnjVw482_z0E-baqqB5QnolhZtHItlvR3A/exec?action=ugc_feed&uid='+uid,{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){
  var photos=(j&&j.photos)||[];if(!photos.length)return;
  var s=document.createElement('style');s.textContent='#'+K+' img{width:64px;height:64px;object-fit:cover;border-radius:8px;border:1px solid #e6e4df}#'+K+' .lbl{font:11px/1.3 Manrope,sans-serif;color:#999;width:100%}';
  document.head.appendChild(s);
  var lbl=document.createElement('div');lbl.className='lbl';lbl.textContent='Семейный альбом ('+photos.length+'):';box.appendChild(lbl);
  photos.slice(0,8).forEach(function(p){var a=document.createElement('a');a.href=p.url||p.public_url;a.target='_blank';a.rel='noopener';var im=document.createElement('img');im.src=p.thumb||p.url;im.loading='lazy';im.alt='Muscle Tribe: семейный альбом';a.appendChild(im);box.appendChild(a)});
 }).catch(function(){});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(mount,1200)});else setTimeout(mount,1200);
})();
