(function(){
var K='mt-banner-carousel';
if(document.getElementById(K))return;
var IMG='https://static.tildacdn.com/tild3363-3263-4930-b238-643339353730/Rectangle_177686.png';
var SLIDES=[
 {img:IMG,link:'',label:'Muscle Tribe'}
];
function build(){
 var host=document.getElementById('rec1519889921');if(!host)return;
 var art=host.querySelector('.t396__artboard')||host;
 var wrap=document.getElementById(K);if(wrap)return;
 wrap=document.createElement('div');wrap.id=K;
 wrap.setAttribute('data-slides',String(SLIDES.length));
 var css=document.createElement('style');
 css.textContent='#'+K+'{position:relative!important;width:100vw!important;margin-left:calc(50% - 50vw)!important;height:470px!important;overflow:hidden!important;background:#191919!important}'
 +'#'+K+' .mtc-slide{position:absolute!important;inset:0!important;background-size:cover!important;background-position:center!important}'
 +'#'+K+' .mtc-slide a{display:block!important;width:100%!important;height:100%!important}'
 +'#rec1519889921 .t396__artboard{overflow:visible!important}'
 +'#rec1520244201{margin-top:0!important;padding-top:0!important}';
 wrap.appendChild(css);
 SLIDES.forEach(function(s,i){var d=document.createElement('div');d.className='mtc-slide';d.style.backgroundImage='url("'+s.img+'")';d.setAttribute('data-index',String(i));d.setAttribute('data-label',s.label);if(s.link){var a=document.createElement('a');a.href=s.link;d.appendChild(a)}wrap.appendChild(d)});
 art.insertBefore(wrap,art.firstChild);
 var old=host.querySelector('.tn-elem[data-elem-id="1762329522850"]');if(old)old.style.setProperty('display','none','important');
 var old2=host.querySelector('.tn-elem__15198899211762329522850');if(old2)old2.style.setProperty('display','none','important');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
var iv=setInterval(build,1000);setTimeout(function(){clearInterval(iv)},12000);
})();
