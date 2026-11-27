(function(){
var K='mt-catalog-pos';
if(document.getElementById(K))return;
function place(){
 var nat=document.getElementById('rec6301473101');
 var root=document.getElementById('mt-catalog-carousel');
 if(!nat||!root||root.contains(nat))return;
 var rows=[...root.querySelectorAll('.mt-row')];
 var seasonal=rows.find(function(r){return /Худи MUSCLE TRIBE/.test((r.textContent||''))&&!/Ланьярд/.test((r.textContent||''))});
 var acc=rows.find(function(r){return /Ланьярд|Шоппер/.test((r.textContent||''))});
 if(acc&&acc.parentNode){
   root.insertBefore(nat,acc);
   var m=document.createElement('span');m.id=K;m.style.display='none';document.body.appendChild(m);
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(place,1400)});else setTimeout(place,1400);
var iv=setInterval(place,1500);setTimeout(function(){clearInterval(iv)},20000);
})();
