(function(){
var c=document.createElement('style');c.id='mt-about-accent';
c.textContent='#rec1520244201 .tn-atom span.mt-accent-line{color:#e2602f!important;font-weight:700!important}';
document.head.appendChild(c);
function paint(){
 var a=document.querySelector('#rec1520244201 .tn-elem__15202442011762333325430 .tn-atom');
 if(!a||a.dataset.mtAccent)return;
 var html=a.innerHTML;
 var needle='свобода в движении, красота в статике и уверенность в каждом подходе';
 if(html.indexOf(needle)<0)return;
 a.innerHTML=html.replace(needle,'<span class="mt-accent-line">'+needle+'</span>');
 a.dataset.mtAccent='1';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(paint,300)});else setTimeout(paint,300);
})();
