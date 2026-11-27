(function(){
var K='mt-home-catalog';
if(document.getElementById(K))return;
var CSS='#'+K+'.mt-home-cat{clear:both;max-width:1320px;margin:0 auto;padding:20px 0}'
+'#'+K+' .t-rec{background:#191919!important}'
+'@media(max-width:900px){#'+K+' .mt-home-cat{padding:10px}}';
function build(){
 if(location.pathname!=='/')return;
 var root=document.getElementById('mt-catalog-carousel');if(!root||document.getElementById(K))return;
 fetch('https://muscletribe.ru/catalog?inc='+Date.now(),{cache:'no-store'}).then(function(r){return r.text()}).then(function(h){
  if(document.getElementById(K))return;
  var d=new DOMParser().parseFromString(h,'text/html');
  var src=d.getElementById('rec1780716421');if(!src)return;
  var wrap=document.createElement('div');wrap.id=K;wrap.className='mt-home-cat';
  var st=document.createElement('style');st.textContent=CSS;wrap.appendChild(st);
  wrap.appendChild(src.cloneNode(true));
  var rows=[...root.querySelectorAll('.mt-row')];
  var gender=rows.find(function(r){return r.querySelector('.mt-banners')});
  var acc=rows.find(function(r){return /Ланьярд|Шоппер|Носки/.test((r.textContent||''))&&!/последние/i.test((r.textContent||''))});
  var ref=acc||(gender?gender.nextSibling:null);
  if(ref&&ref.parentNode)root.insertBefore(wrap,ref);else root.appendChild(wrap);
 }).catch(function(){});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(build,1200)});else setTimeout(build,1200);
})();
