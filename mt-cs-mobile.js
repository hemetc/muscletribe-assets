(function(){
if(document.getElementById('mt-cs-mobile'))return;
var c=document.createElement('style');c.id='mt-cs-mobile';
c.textContent='@media(max-width:900px){'
+'#mt-crosssell .mt-cs-row{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important}'
+'#mt-crosssell .mt-cs-p{white-space:nowrap!important;font-size:13px!important;letter-spacing:-.01em!important}'
+'#mt-crosssell .mt-cs-n{font-size:12px!important;line-height:1.3!important}'
+'}';
document.head.appendChild(c);
})();
