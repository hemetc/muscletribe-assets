(function(){
var path=location.pathname;
if(path.indexOf('/privacy')<0&&path.indexOf('/agreement')<0&&path.indexOf('/cookie')<0)return;
var K='mt-legal-std';
var R=[
 [/Версия от "12" января 2026 г./g,'Редакция от 29 ноября 2026 г.'],
 [/Версия от "12" января 2026 г/g,'Редакция от 29 ноября 2026 г'],
 [/12 января 2026 г./g,'29 ноября 2026 г.'],
 [/О персональный данных/g,'О персональных данных'],
 [/Политикой конфиденциальности/g,'Политикой обработки персональных данных'],
 [/Политика конфиденциальности/g,'Политика обработки персональных данных'],
 [/действует бессрочно до замены ее новой версией/g,'действует до замены новой редакцией; актуальная редакция публикуется на этой странице']
];
function esc(s){return s.replace(/&nbsp;/g,'\u00a0')}
function fix(){
 if(document.getElementById(K))return;
 var ids=path.indexOf('/privacy')>=0?['rec1576106991','rec1576109381']:path.indexOf('/agreement')>=0?['rec1817086321','rec1817086311']:['rec1611833951','rec1611833941'];
 var hit=0;
 ids.forEach(function(id){var rec=document.getElementById(id);if(!rec)return;var nodes=[...rec.querySelectorAll('[field="text"],.t795__title,.t-text')];nodes.forEach(function(n){if(!n.dataset.mtLegal){var h=n.innerHTML;var o=h;R.forEach(function(r){h=h.replace(r[0],r[1])});if(path.indexOf('/cookie')>=0&&/^\s*г\. Москва/.test(n.textContent||'')){h=h.replace(/г\. Москва/,'г. Долгопрудный, Московская область')}if(h!==o){n.innerHTML=h;hit++}n.dataset.mtLegal='1'}})});
 if(hit){var s=document.createElement('style');s.id=K;s.textContent='';document.head.appendChild(s)}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);else fix();
var iv=setInterval(fix,1200);setTimeout(function(){clearInterval(iv)},15000);
})();
