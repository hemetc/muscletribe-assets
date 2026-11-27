(function(){
if(document.getElementById('mt-carousel-infinite'))return;
var c=document.createElement('style');c.id='mt-carousel-infinite';c.textContent='';
document.head.appendChild(c);
function loop(){
 var rows=[...document.querySelectorAll('#mt-catalog-carousel .mt-row')];
 rows.forEach(function(row){
  if(row.dataset.mtLoop)return;
  var L=row.querySelector('.mt-arr.l'),R=row.querySelector('.mt-arr.r'),cnt=row.querySelector('.mt-meta span');
  var track=row.querySelector('.mt-track'),vp=row.querySelector('.mt-vp');
  if(!L||!R||!track||!vp)return;
  var t=track.children.length, per=Math.max(1,Math.round(vp.clientWidth/(track.children[0]?.getBoundingClientRect().width||1)));
  var pages=Math.max(1,Math.ceil(t/per)),idx=0;
  function go(n,manual){
   idx=((n%pages)+pages)%pages;
   var ch=track.children[idx*per];var mx=Math.max(0,track.scrollWidth-vp.clientWidth);
   var sx=Math.min(ch?ch.offsetLeft:0,mx);
   track.style.transition=manual?'transform .35s ease':'transform .5s linear';
   track.style.transform='translateX('+(-sx)+'px)';
   if(cnt)cnt.textContent=(idx+1)+' / '+pages;
  }
  L.onclick=function(e){e.preventDefault();go(idx-1,true)};
  R.onclick=function(e){e.preventDefault();go(idx+1,true)};
  L.disabled=false;R.disabled=false;
  go(0);
  var timer=setInterval(function(){go(idx+1,false)},6000);
  vp.addEventListener('mouseenter',function(){clearInterval(timer)});
  vp.addEventListener('mouseleave',function(){timer=setInterval(function(){go(idx+1,false)},6000)});
  row.dataset.mtLoop='1';
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(loop,1600)});else setTimeout(loop,1600);
var iv=setInterval(loop,2000);setTimeout(function(){clearInterval(iv)},30000);
})();
