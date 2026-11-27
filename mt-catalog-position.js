(function(){
var K='mt-catalog-pos';
if(document.getElementById(K))return;
function place(){
 var nat=document.getElementById('rec6301473101');
 var root=document.getElementById('mt-catalog-carousel');
 if(!nat||!root)return;
 var rows=[...root.querySelectorAll('.mt-row')];
 if(rows.length<4)return;
 // сезонные = строка с «Худи/Брелок», аксессуары = строка с «Ланьярд/Шоппер»
 var seasonal=rows.find(function(r){return /Худи MUSCLE TRIBE/.test((r.textContent||''))&&!/Ланьярд/.test((r.textContent||''))});
 var acc=rows.find(function(r){return /Ланьярд|Шоппер/.test((r.textContent||''))});
 var marker=document.createElement('span');marker.id=K;marker.style.display='none';
 if(seasonal&&acc&&acc.parentNode){
   root.insertBefore(marker,acc);
   nat.parentNode.insertBefore(marker,nat);
   marker.parentNode.insertBefore(nat,marker);
   marker.remove();
 } else if(acc&&acc.parentNode){acc.parentNode.insertBefore(nat,acc)}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(place,1300)});else setTimeout(place,1300);
})();
