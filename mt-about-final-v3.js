(function(){
var c=document.createElement('style');c.id='mt-about-final';
c.textContent='#rec1520244201{background:#fff!important}#rec1520244201 .t396__artboard,#rec1520244201 .t396__carrier,#rec1520244201 .t396__filter{background-color:#fff!important}#rec1520244201 .tn-elem__15202442011762333325430 .tn-atom{color:#757575!important}'
+'#rec1520244201 .tn-elem__15202442011762333325430 .tn-atom span{color:#191919!important}'
+'#rec1520244201 .tn-elem__15202442011762333325430 .tn-atom span[style*="226, 96, 47"]{color:#fff!important}'
+'#rec1520244201 .tn-atom span.mt-accent-line{color:#e2602f!important;font-weight:700!important}'
+'#rec1520244201 .tn-elem__15202442011762333764950{display:none!important}';
document.head.appendChild(c);
function fix(){
 var a=document.querySelector('#rec1520244201 .tn-elem__15202442011762333325430 .tn-atom');
 if(!a||a.dataset.mtFinal)return;
 var h=a.innerHTML;
 h=h.replace(/свобода в движении, красота в статике и уверенность в каждом подходе/,'<span class="mt-accent-line">свобода в движении, стиль в статике и уверенность в каждом подходе</span>');
 a.innerHTML=h;a.dataset.mtFinal='1';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(fix,400)});else setTimeout(fix,400);
})();
