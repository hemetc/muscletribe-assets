(function(){
// Цветные кружки у названия: источник — реальные опции «Цвет», фолбэк — старое название.
function mount(){
 var h=document.querySelector('.t-store__prod-popup__name')||document.querySelector('h1');if(!h)return;
 if(h.querySelector('.mt-title-color'))return;
 var M=[
  ['чёрн','#191919','black'],['черн','#191919','black'],
  ['бел','#f2f2f2','white'],
  ['меланж','#b8b8b8','gray'],['сер','#9b9b9b','gray'],['графит','#4a4a4a','gray'],
  ['син','#2f6fb0','blue'],['голуб','#7ec8e3','blue'],
  ['бирюзов','#2ba6a0','teal'],
  ['зелён','#2e8b35','green'],['зелен','#2e8b35','green'],['лайм','#a4e01b','green'],
  ['розов','#eaa6c0','pink'],['лососев','#e08a76','pink'],
  ['рыж','#c85a2b','red'],['оранжев','#e2602f','red'],['терракот','#b85c3c','red'],['бордо','#6b1e2e','red'],
  ['горчичн','#d7a52b','yellow'],['жёлт','#d7a52b','yellow'],['желт','#d7a52b','yellow'],
  ['фиолетов','#6a3d9a','purple'],['коричнев','#7b4b2a','brown']
 ];
 function hex(s){s=(s||'').toLowerCase();for(var i=0;i<M.length;i++){if(s.indexOf(M[i][0])>=0)return [M[i][1],M[i][2]]}return null}
 var vals=[...document.querySelectorAll('input[name="Цвет"]')].map(function(x){return x.value||''}).filter(Boolean);
 var found=[],fam={};
 vals.forEach(function(v){var c=hex(v);if(c&&!fam[c[1]]){fam[c[1]]=1;found.push(c[0])}});
 if(!found.length){var t=(h.textContent||'').toLowerCase();M.forEach(function(m){if(t.indexOf(m[0])>=0&&!fam[m[2]]){fam[m[2]]=1;found.push(m[1])}})}
 if(!found.length)return;
 if(!document.getElementById('mt-chip-css')){
  var css=document.createElement('style');css.id='mt-chip-css';
  css.textContent='.mt-title-color{display:inline-block;width:16px;height:16px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.18);vertical-align:middle;margin-left:8px}.mt-title-color:first-of-type{margin-left:10px}';
  document.head.appendChild(css);
 }
 found.forEach(function(c){var s=document.createElement('span');s.className='mt-title-color';s.title='Цвет товара';s.style.background=c;h.appendChild(s)});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
var iv=setInterval(mount,1200);setTimeout(function(){clearInterval(iv)},15000);
})();
