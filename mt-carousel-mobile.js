(function(){
if(document.getElementById('mt-carousel-mobile'))return;
var c=document.createElement('style');c.id='mt-carousel-mobile';
c.textContent='@media(max-width:900px){'
+'.mt-track .mt-card{flex:0 0 calc((100% - 28px)/3)!important;min-width:0!important}'
+'.mt-card .mt-p,.mt-card [class*=price]{white-space:nowrap!important;font-size:15px!important;letter-spacing:-.01em!important}'
+'.mt-card .mt-t{font-size:13px!important;line-height:1.3!important}'
+'}';
document.head.appendChild(c);
})();
