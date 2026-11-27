(function(){
function lum(rgb){var m=rgb.match(/\d+/g);if(!m)return 255;return (Number(m[0])*299+Number(m[1])*587+Number(m[2])*114)/1000}
function mount(){
 if(/\/tproduct\/(657867329573|982801956003)/.test(location.pathname))return;
 if(location.pathname.indexOf('/tproduct/')<0)return;
 var h=document.querySelector('.t-store__prod-popup__name')||document.querySelector('h1');if(!h)return;
 // 1) адаптивный цвет заголовка под фон
 var bg=getComputedStyle(document.body).backgroundColor;
 if(lum(bg)<120)document.body.classList.add('mt-dark-surface');
 if(!document.getElementById('mt-title-adaptive')){var c=document.createElement('style');c.id='mt-title-adaptive';
 c.textContent='.mt-dark-surface .t-store__prod-popup__name,.mt-dark-surface .t-store__prod-popup__descr{color:#fff!important}.mt-dark-surface .mt-title-color{border-color:#191919!important}';
 document.head.appendChild(c)}
 // 2) кружки ТОЛЬКО из опций основного товара (исключаем кросс-селл)
 if(h.querySelector('.mt-title-color'))return;
 var scope=document.querySelector('.t-store__prod-popup__content')||document.querySelector('.t-store__prod-popup')||document.querySelector('.js-store-prod-slider')?.parentNode||document;
 var ins=[...scope.querySelectorAll('input[name="Цвет"]')].filter(function(x){
   var p=x.closest('#mt-crosssell,[id*=crosssell],.t-store__card');return !p;
 });
 var vals=ins.map(function(x){return x.value||''}).filter(Boolean);
 var M=[['чёрн','#191919','black'],['черн','#191919','black'],['бел','#f2f2f2','white'],['меланж','#b8b8b8','gray'],['сер','#9b9b9b','gray'],['графит','#4a4a4a','gray'],['син','#2f6fb0','blue'],['голуб','#7ec8e3','blue'],['бирюзов','#2ba6a0','teal'],['зелён','#2e8b35','green'],['зелен','#2e8b35','green'],['лайм','#a4e01b','green'],['розов','#eaa6c0','pink'],['лососев','#e08a76','pink'],['рыж','#c85a2b','red'],['оранжев','#e2602f','red'],['терракот','#b85c3c','red'],['бордо','#6b1e2e','red'],['горчичн','#d7a52b','yellow'],['жёлт','#d7a52b','yellow'],['желт','#d7a52b','yellow'],['фиолетов','#6a3d9a','purple'],['коричнев','#7b4b2a','brown']];
 function hex(s){s=(s||'').toLowerCase();for(var i=0;i<M.length;i++)if(s.indexOf(M[i][0])>=0)return [M[i][1],M[i][2]];return null}
 var found=[],fam={};vals.forEach(function(v){var c=hex(v);if(c&&!fam[c[1]]){fam[c[1]]=1;found.push(c[0])}});
 if(!found.length){var t=(h.textContent||'').toLowerCase();M.forEach(function(m){if(t.indexOf(m[0])>=0&&!fam[m[2]]){fam[m[2]]=1;found.push(m[1])}})}
 if(!found.length)return;
 if(!document.getElementById('mt-chip-css')){var s=document.createElement('style');s.id='mt-chip-css';
 s.textContent='.mt-title-color{display:inline-block;width:16px;height:16px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.18);vertical-align:middle;margin-left:8px}.mt-title-color:first-of-type{margin-left:10px}';
 document.head.appendChild(s)}
 found.forEach(function(c){var e=document.createElement('span');e.className='mt-title-color';e.title='Цвет товара';e.style.background=c;h.appendChild(e)});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
var iv=setInterval(mount,1200);setTimeout(function(){clearInterval(iv)},15000);
})();
