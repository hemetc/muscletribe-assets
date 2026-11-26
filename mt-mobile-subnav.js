(function(){
// Мобильное меню: подразделы каталога под пунктом «Каталог» (как в футере).
var B='https://muscletribe.ru/catalog?tfc_storepartuid%5B1780716421%5D=';
var E=[['Футболки','%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B8'],['Худи','%D0%A5%D1%83%D0%B4%D0%B8'],['Шапки','%D0%A8%D0%B0%D0%BF%D0%BA%D0%B8'],['Штаны','%D0%A8%D1%82%D0%B0%D0%BD%D1%8B'],['Носки','%D0%9D%D0%BE%D1%81%D0%BA%D0%B8'],['Аксессуары','%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B'],['Скидки','%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B8%D0%B5%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B']];
var s=document.createElement('style');
s.textContent='.mt-mobile-subnav{display:block!important;flex:0 0 100%!important;width:100%!important;list-style:none!important;margin:2px 0 10px!important;padding:0 0 0 16px!important;border-left:1px solid rgba(226,96,47,.35)!important;text-align:left!important;box-sizing:border-box!important}.mt-mobile-subnav a{display:block!important;text-align:left!important;padding:5px 0!important;font-family:var(--mt-font-ui)!important;font-size:12px!important;line-height:1.35!important;color:var(--mt-muted-2)!important;text-decoration:none!important}.mt-mobile-subnav a:hover{color:var(--mt-accent)!important}@media(min-width:901px){.mt-mobile-subnav{display:none!important}}';
document.head.appendChild(s);
function build(){
 var lists=document.querySelectorAll('.t-menu-base__list');
 for(var i=0;i<lists.length;i++){
  var ul=lists[i];if(ul.querySelector('.mt-mobile-subnav'))continue;
  var a=Array.prototype.filter.call(ul.querySelectorAll('a'),function(x){return (x.getAttribute('href')||'')==='/catalog'})[0];
  if(!a)continue;
  var li=a.closest('.t-menu-base__list-item')||a.parentElement.parentElement;
  if(!li||!li.parentNode)continue;
  var wrap=document.createElement('li');wrap.className='mt-mobile-subnav';
  wrap.innerHTML=E.map(function(x){return '<a href="'+B+x[1]+'&tfc_div=:::">'+x[0]+'</a>'}).join('');
  li.parentNode.insertBefore(wrap,li.nextSibling);
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
var t=0,iv=setInterval(function(){build();if(++t>40)clearInterval(iv)},1000);
})();
