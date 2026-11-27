(function(){
var K='mt-banner-hub';
if(document.getElementById(K))return;
var LOGO='https://static.tildacdn.com/tild3363-3263-4930-b238-643339353730/Rectangle_177686.png';
var SLIDES=[
 {k:'brand',img:LOGO,label:'MUSCLE TRIBE',href:'https://muscletribe.ru/catalog'},
 {k:'sale',img:'https://static.tildacdn.com/tild3837-3864-4732-b861-346132356263/_.svg',label:'Акции и последние размеры',href:'https://muscletribe.ru/catalog?tfc_storepartuid%5B755203572753%5D=on'},
 {k:'new',img:LOGO,label:'Новинки и дропы',href:'https://muscletribe.ru/catalog?sort=1'},
 {k:'ugc',img:'',label:'Семейный альбом — фото клиентов',href:'#ugc'}
];
var CSS='#'+K+'.hub{position:relative;width:100vw;margin-left:calc(50% - 50vw);height:470px;overflow:hidden;background:#191919}'
+'#'+K+' .slide{position:absolute;inset:0;background-size:cover;background-position:center;transition:opacity .5s ease,transform .6s ease;opacity:0}'
+'#'+K+' .slide.on{opacity:1;transform:scale(1)}'
+'#'+K+' .cap{position:absolute;left:0;right:0;bottom:0;padding:24px 20px;background:linear-gradient(transparent,rgba(0,0,0,.75));color:#fff;font:700 20px/1.2 Manrope,sans-serif;letter-spacing:.04em;text-decoration:none}'
+'#'+K+' .dots{position:absolute;top:14px;right:16px;display:flex;gap:6px}'
+'#'+K+' .dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.4);cursor:pointer}'
+'#'+K+' .dot.on{background:#e2602f}'
+'@media(max-width:900px){#'+K+'.hub{height:min(56vh,420px)!important}'
+'#'+K+' .slide{background-size:contain!important;background-position:center top!important;background-repeat:no-repeat!important}'
+'#'+K+' .cap{font-size:16px!important;padding:14px 16px!important}'
+'}';
function mount(){
 if(document.getElementById(K))return;
 var old=document.getElementById('mt-banner-carousel');var anchor=document.getElementById('rec1519889921');if(!old&&!anchor)return;if(!old)old=anchor;
 var h=document.createElement('div');h.id=K;h.className='hub';
 var st=document.createElement('style');st.textContent=CSS;h.appendChild(st);
 var dots=document.createElement('div');dots.className='dots';h.appendChild(dots);
 SLIDES.forEach(function(s,i){
  var d=document.createElement('div');d.className='slide'+(i===0?' on':'');
  if(s.img)d.style.backgroundImage='url("'+s.img+'")';
  var a=document.createElement('a');a.className='cap';a.href=s.href;a.textContent=s.label;d.appendChild(a);
  h.appendChild(d);
  var dot=document.createElement('span');dot.className='dot'+(i===0?' on':'');dot.dataset.i=i;
  dot.onclick=function(){go(i)};dots.appendChild(dot);
 });
 old.parentNode.insertBefore(h,old);old.style.display='none';
 var idx=0;
 function go(n){idx=n;[].forEach.call(h.querySelectorAll('.slide'),function(x,i){x.classList.toggle('on',i===idx)});[].forEach.call(dots.children,function(x,i){x.classList.toggle('on',i===idx)})}
 var timer=setInterval(function(){go((idx+1)%SLIDES.length)},7000);
 h.addEventListener('mouseenter',function(){clearInterval(timer)});
 // скролл-эффект: сжатие/сдвиг
 window.addEventListener('scroll',function(){
  var y=Math.min(scrollY,300);
  h.style.transform='translateY('+(-y*0.15)+'px)';
  h.style.height=(470-y*0.25)+'px';
 },{passive:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(mount,1500)});else setTimeout(mount,1500);
})();
