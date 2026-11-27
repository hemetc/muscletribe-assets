(function(){
if(document.getElementById('mt-mobile-cat-sub'))return;
var c=document.createElement('style');c.id='mt-mobile-cat-sub';
c.textContent='@media(max-width:900px){'
+'#mt-catalog-drop,.tmenu-mobile #mt-catalog-drop,body .t-menu__link-wrapper #mt-catalog-drop{display:block!important;position:static!important;background:transparent!important;padding:8px 0 16px 18px!important;box-shadow:none!important}'
+'#mt-catalog-drop a{display:block!important;padding:6px 0!important;color:#9a9a9a!important;text-decoration:none!important;font-size:16px!important}'
+'#mt-catalog-drop a:hover{color:#e2602f!important}'
+'}';
document.head.appendChild(c);
})();
