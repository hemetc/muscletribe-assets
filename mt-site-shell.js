(function(){
var _mtAlert=window.alert;window.alert=function(m){if(String(m||'').indexOf('виджета корзины')>-1)return;return _mtAlert.apply(window,arguments)};
var CATALOG='https://muscletribe.ru/catalog';
function uid(){var m=location.pathname.match(/\/tproduct\/(\d+)/);return m?m[1]:null}
function applyShell(html){
  var doc=new DOMParser().parseFromString(html,'text/html');
  var h=doc.querySelector('#t-header'),f=doc.querySelector('#t-footer,footer');
  if(h){Array.prototype.forEach.call(h.querySelectorAll('.t-menuwidgeticons__icon_cart,.t-menuwidgeticons__link_cart,[data-menu-widgeticon-cart]'),function(el){if(el.hasAttribute&&el.hasAttribute('data-menu-widgeticon-cart')){el.setAttribute('data-menu-widgeticon-cart','no');return}if(el.parentNode)el.parentNode.removeChild(el)})}
  if(h&&!document.querySelector('#t-header')){document.body.insertBefore(h,document.body.firstChild);Array.prototype.forEach.call(h.querySelectorAll('a[href="#opencart"],[class*=t-menuwidgeticons__cart],[class*=t706__carticon],[class*=t706__cartpage]'),function(el){if(el.parentNode)el.parentNode.removeChild(el)})}
  if(f&&!document.querySelector('#t-footer')){document.body.appendChild(f)}
  var heads=doc.querySelectorAll('script[src]'),added=0;
  var SKIP=/tilda-products-|tilda-cart-|tilda-catalog-|tilda-blocks-page|tilda-widget-positions|tilda-menu-widgeticons/;
  for(var i=0;i<heads.length&&added<12;i++){var src=heads[i].getAttribute('src')||'';if(!src||src.indexOf('script.google')>-1||SKIP.test(src))continue;if(document.querySelector('script[src="'+src+'"]'))continue;var s=document.createElement('script');s.src=src;s.async=true;document.head.appendChild(s);added++}
  if(window.tildaInitAllEvents){try{tildaInitAllEvents()}catch(e){}}
}
function load(){if(uid()&&!window.__mtShell){window.__mtShell=1;var x=new XMLHttpRequest();x.open('GET',CATALOG,true);x.onreadystatechange=function(){if(x.readyState===4&&x.status===200){try{applyShell(x.responseText)}catch(e){}}};x.send()}}
function cleanNav(){var n=document.querySelector('.mt-nav');if(n){var acts=n.querySelectorAll('[data-a=back],[data-a=cat]');for(var i=0;i<acts.length;i++)acts[i].parentElement.removeChild(acts[i])}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){cleanNav();load()});else{cleanNav();load()}
setInterval(cleanNav,1200);
})();
