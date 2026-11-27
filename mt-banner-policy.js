(function(){
if(document.getElementById('mt-banner-policy'))return;
var c=document.createElement('style');c.id='mt-banner-policy';
c.textContent='@media(max-width:900px){'
+'#mt-banner-carousel{height:min(56vh,420px)!important;min-height:0!important}'
+'#mt-banner-carousel .mtc-slide{background-size:contain!important;background-position:center top!important;background-repeat:no-repeat!important}'
+'#rec1519889921{height:auto!important}'
+'#rec1520244201{margin-top:20px!important}'
+'}';
document.head.appendChild(c);
})();
