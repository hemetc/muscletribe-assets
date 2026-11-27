(function(){
function mount(){
 var r=document.getElementById('rec1520244201');if(!r)return;
 if(!document.getElementById('mt-about-compact-css')){var c=document.createElement('style');c.id='mt-about-compact-css';
 c.textContent='#rec1520244201 .t396__artboard{height:150px!important}#rec1520244201 .tn-elem__1520244201176233359563125990,#rec1520244201 .tn-elem__15202442011762333764950{display:none!important}#rec1520244201 .tn-elem__15202442011762333325430{top:0!important;max-width:none!important;padding:0!important;box-sizing:border-box!important}#rec1520244201 .tn-elem__15202442011762333325430 .tn-atom{font-size:14px!important;line-height:1.4!important;color:#f5f5f5!important;max-width:none!important;text-transform:none!important;letter-spacing:0!important;margin:0!important;padding:0!important}';
 document.head.appendChild(c)}
 var art=r.querySelector('.t396__artboard'),hero=document.querySelector('.tn-elem__15198899211762329522850'),box=r.querySelector('.tn-elem__15202442011762333325430');
 if(art&&hero&&box){var ar=art.getBoundingClientRect(),br=hero.getBoundingClientRect();var w=Math.min(430,br.width-48),h=box.offsetHeight||120;box.style.setProperty('left',Math.round(br.right-ar.left-w-22)+'px','important');box.style.setProperty('top',Math.round(br.bottom-ar.top-h-22)+'px','important');box.style.setProperty('width',Math.round(w)+'px','important');box.style.setProperty('max-width','none','important');}
 var a=r.querySelector('.tn-elem__15202442011762333325430 .tn-atom');
 if(a&&!a.dataset.mtPaint){a.dataset.mtPaint='1';var h=a.innerHTML;
  h=h.replace(/Muscle Tribe/i,'<span style="color:#e2602f">Muscle Tribe</span>');
  var k=h.indexOf('<br><br>');if(k>=0)h=h.slice(0,k+8)+'<span style="color:#9b9b9b">'+h.slice(k+8)+'</span>';
  a.innerHTML=h}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
var iv=setInterval(mount,1000);setTimeout(function(){clearInterval(iv)},15000);
})();
