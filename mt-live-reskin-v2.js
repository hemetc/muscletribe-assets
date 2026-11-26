(function(){
// Единый стиль формы UGC поверх GAS-скрипта: «Хочу скидку!», игровой текст, rule про 7 дней.
var RULE='Не более одного промокода на аккаунт за 7 дней. Если лимит уже использован — фото всё равно опубликуем, а код не придёт; сообщим об этом.';
function lh(u){var m=String(u||'').match(/[?&]id=([A-Za-z0-9_-]+)/);return (m&&/drive.google.com|drive.usercontent/.test(u))?'https://lh3.googleusercontent.com/d/'+m[1]:u}
function put(el,txt){if(el&&el.textContent!==txt)el.textContent=txt}
// Исключения: аксессуары и раздел «Последние размеры» (форма/лента не показываются).
var EXTRA_EXCLUDE=['705979681673','468353113643','465241639432','649445217923','192834629392','402314237072','485757333802','775361511902','233709405032','582486843052','537423184772','318491354272'];
function r(){
 var pm=location.pathname.match(/\/tproduct\/(\d+)/),uidNow=pm?pm[1]:'';
 if(EXTRA_EXCLUDE.indexOf(uidNow)>-1){
  var st=document.querySelector('.mt-live-strip');if(st)st.style.setProperty('display','none','important');
  var abx=document.querySelector('.mt-live-addbtn');if(abx)abx.style.setProperty('display','none','important');
  return;
 }
 var b=document.querySelector('.mt-live-addbtn');if(b){put(b,'Хочу скидку!');b.style.setProperty('--mt-emoji','🎁')}
 var h=document.querySelector('.mt-live-strip__head b');put(h,'Семейный альбом');
 var c=document.querySelector('.mt-live-strip__cnt');if(c){var n=document.querySelectorAll('.mt-live-strip__ph').length;put(c,n?n+' фото':'скоро')}
 var nt=document.querySelector('.mt-live-strip__note');
 var imgs=document.querySelectorAll('.mt-live-strip__ph img'),real=0;
 Array.prototype.forEach.call(imgs,function(im){if(/lh3\.googleusercontent|drive\.google|uc\?export/.test(im.src||''))real++});
 var strip=document.querySelector('.mt-live-strip');
 if(strip&&real===0)Array.prototype.forEach.call(strip.querySelectorAll('.mt-live-strip__ph'),function(x){if(x.parentNode)x.parentNode.removeChild(x)});
 if(nt)put(nt,real===0?'Добавь первым своё фото этого товара — и получи скидку 10% на следующий заказ!':'Добавь фото этого товара — и получи скидку 5% на следующий заказ!');
 if(c&&real===0)put(c,'');
 Array.prototype.forEach.call(document.querySelectorAll('.mt-live-strip__ph img'),function(im){var s=lh(im.getAttribute('src')||'');if(s!==im.getAttribute('src'))im.src=s});
 var li=document.querySelector('.mt-live-lb img');if(li){var s=lh(li.getAttribute('src')||'');if(s!==li.getAttribute('src'))li.src=s}
 var box=document.querySelector('.mt-live-box');if(!box)return;
 put(box.querySelector('h4'),'Ещё нет фото? Не беда!');
 put(box.querySelector('.sub'),'Лови скидку 10% на первый заказ. Но обещай, что поделишься фоточками ;)');
 put(box.querySelector('.win'),'Первому — 10%, следующим — 5%');
 put(box.querySelector('.mt-live-drop .t1'),'Перетащи сюда фото купленной вещи');
 put(box.querySelector('.hint'),'Пришлём код на этот контакт');
 put(box.querySelector('.go'),'Получить скидку');
 var rule=box.querySelector('.mt-live-rule');if(!rule){rule=document.createElement('div');rule.className='mt-live-rule';var agree=box.querySelector('.agree');if(agree)agree.parentNode.insertBefore(rule,agree.nextSibling)}
 rule.style.cssText='font-size:10px;line-height:1.45;color:var(--mt-muted);background:#FAFAF8;border-radius:9px;padding:8px 10px;margin:0 0 12px';
 put(rule,RULE);
}
var s=document.createElement('style');s.textContent='.mt-live-addbtn:before{content:"🎁";font-size:15px}.mt-live-strip__head b{letter-spacing:.03em}.mt-live-box{font-family:var(--mt-font-ui)!important;overflow-x:hidden!important}.mt-live-box h4,.mt-live-box .sub,.mt-live-box .win,.mt-live-box .go,.mt-live-box .x,.mt-live-msg{font-family:var(--mt-font-ui)!important}';document.head.appendChild(s);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',r);else r();
setInterval(r,700);
})();
