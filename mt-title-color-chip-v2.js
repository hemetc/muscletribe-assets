(function(){
// Цветной кружок рядом с названием товара, если цвет есть в title.
function mount(){var h=document.querySelector('.t-store__prod-popup__name')||document.querySelector('h1');if(!h)return;
var title=(h.textContent||'').toLowerCase();
var M=[['чёрн','#191919'],['черн','#191919'],['бел','#f2f2f2'],['меланж','#b8b8b8'],['графит','#4a4a4a'],['сер','#9b9b9b'],['син','#2f6fb0'],['голуб','#7ec8e3'],['бирюзов','#2ba6a0'],['зелён','#2e8b35'],['зелен','#2e8b35'],['лайм','#a4e01b'],['розов','#eaa6c0'],['рыж','#c85a2b'],['горчичн','#d7a52b'],['оранжев','#e2602f'],['лососев','#e08a76'],['терракот','#b85c3c'],['бордо','#6b1e2e'],['фиолетов','#6a3d9a'],['коричнев','#7b4b2a']];
var color=null;for(var i=0;i<M.length;i++){if(title.indexOf(M[i][0])>=0){color=M[i][1];break}}
if(!color||document.querySelector('.mt-title-color'))return;
var css=document.createElement('style');css.textContent='.mt-title-color{display:inline-block;width:16px;height:16px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.18);vertical-align:middle;margin-left:10px}';document.head.appendChild(css);
var s=document.createElement('span');s.className='mt-title-color';s.title='Цвет товара';s.style.background=color;h.appendChild(s);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();var iv=setInterval(mount,1200);setTimeout(function(){clearInterval(iv)},15000);
})();
