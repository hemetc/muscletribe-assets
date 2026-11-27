(function(){
if(document.getElementById('mt-price-align'))return;
var c=document.createElement('style');c.id='mt-price-align';
c.textContent='#mt-catalog-carousel .mt-card{display:flex!important;flex-direction:column!important}'
+'#mt-catalog-carousel .mt-card .mt-body{display:flex!important;flex-direction:column!important;flex:1!important}'
+'#mt-catalog-carousel .mt-card .mt-p{margin-top:auto!important}'
+'@media(max-width:900px){.t-store__card__body{min-height:120px!important;display:flex!important;flex-direction:column!important}.t-store__card__price{margin-top:auto!important}}';
document.head.appendChild(c);
})();
