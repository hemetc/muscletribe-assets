(function(){
var K='mt-catalog-pos';
if(document.getElementById(K))return;
function place(){
 var nat=document.getElementById('rec6301473101');
 var root=document.getElementById('mt-catalog-carousel');
 if(!nat||!root||root.contains(nat))return;
 var rows=[...root.querySelectorAll('.mt-row')];
 if(rows.length<4)return;
 var acc=rows.find(function(r){return /Ланьярд|Шоппер/.test((r.textContent||''))});
 if(acc&&acc.parentNode){root.insertBefore(nat,acc);var m=document.createElement('span');m.id=K;m.style.display='none';document.body.appendChild(m);return true}
 return false;
}
function watch(){
 var root=document.getElementById('mt-catalog-carousel');
 if(!root)return;
 place();
 var ob=new MutationObserver(function(){if(place())ob.disconnect()});
 ob.observe(root,{childList:true,subtree:true});
 setTimeout(function(){ob.disconnect()},20000);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(watch,900)});else setTimeout(watch,900);
})();
