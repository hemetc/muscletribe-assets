(function(){
var K='mt-catalog-pos';
if(document.getElementById(K))return;
function place(){
 var nat=document.getElementById('rec6301473101');
 var root=document.getElementById('mt-catalog-carousel');
 if(!nat||!root||root.contains(nat))return false;
 var rows=[...root.querySelectorAll('.mt-row')];
 if(rows.length<4)return false;
 var acc=rows.find(function(r){return /Ланьярд|Шоппер/.test((r.textContent||''))});
 if(!acc||!acc.parentNode)return false;
 root.insertBefore(nat,acc);
 var m=document.createElement('span');m.id=K;m.style.display='none';document.body.appendChild(m);
 return true;
}
var iv=setInterval(function(){place()},400);
setTimeout(function(){clearInterval(iv)},30000);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(place,600)});else setTimeout(place,600);
})();
