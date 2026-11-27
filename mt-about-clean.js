(function(){
var c=document.createElement('style');c.id='mt-about-clean';
c.textContent='#rec1520244201{background:#fff!important}'
+'#rec1520244201 .t396__artboard,#rec1520244201 .t396__carrier,#rec1520244201 .t396__filter{background-color:#fff!important}'
+'#rec1520244201 .tn-elem__15202442011762333325430{top:56px!important}'
+'#rec1520244201 .tn-elem__15202442011762333325430 .tn-atom{color:#757575!important}'
+'#rec1520244201 .tn-elem__15202442011762333325430 .tn-atom span{color:#191919!important}'
+'#rec1520244201 .tn-elem__15202442011762333325430 .tn-atom span[style*="226, 96, 47"]{color:#fff!important}'
+'#rec1520244201 .tn-atom span.mt-accent-line{color:#757575!important;font-weight:400!important}'
+'#rec1520244201 .tn-elem__15202442011762333764950,#rec1520422041{display:none!important}'
+'@media(max-width:640px){#rec1520244201 .tn-elem__15202442011762333325430{left:23px!important;width:calc(100% - 46px)!important;top:20px!important}#rec1520244201 .tn-atom{font-size:14px!important;line-height:1.4!important}}';
document.head.appendChild(c);
function fix(){
 var a=document.querySelector('#rec1520244201 .tn-elem__15202442011762333325430 .tn-atom');
 if(!a||a.dataset.mtClean)return;
 var h=a.innerHTML;
 h=h.replace(/<\/span>—\s*<span/,'</span>&nbsp;&nbsp;&nbsp;<span');
 h=h.replace(/свобода в движении, красота в статике и уверенность в каждом подходе/,'<span class="mt-accent-line">свобода в движении, стиль в статике и уверенность в каждом подходе</span>');
 a.innerHTML=h;a.dataset.mtClean='1';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(fix,300)});else setTimeout(fix,300);
})();
