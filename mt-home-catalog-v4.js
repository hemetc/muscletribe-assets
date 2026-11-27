(function(){
var K='mt-home-catalog';
if(document.getElementById(K))return;
if(location.pathname!=='/')return;
var CSS='#'+K+'{clear:both;max-width:1320px;margin:0 auto;padding:20px 0}'
+'#'+K+' iframe{display:block;width:100vw!important;max-width:none!important;margin-left:calc(50% - 50vw)!important;height:1200px;border:0;box-sizing:border-box;background:#191919}'
+'@media(max-width:900px){#'+K+' iframe{height:1400px}}';
function build(){
 var root=document.getElementById('mt-catalog-carousel');if(!root||document.getElementById(K))return;
 var wrap=document.createElement('div');wrap.id=K;
 var st=document.createElement('style');st.textContent=CSS;wrap.appendChild(st);
 var fr=document.createElement('iframe');fr.src='https://muscletribe.ru/catalog?from=home';fr.title='Каталог Muscle Tribe';fr.loading='lazy';fr.setAttribute('scrolling','no');fr.addEventListener('load',function(){try{var d=fr.contentDocument;['.t-menu','[data-record-type=\"195\"]','.t-header','#rec94419426','#rec1782902401'].forEach(function(s){var e=d.querySelector(s);if(e)e.style.setProperty('display','none','important')})}catch(e){}});wrap.appendChild(fr);
 var rows=[...root.querySelectorAll('.mt-row')];
 var acc=rows.find(function(r){return /Ланьярд|Шоппер/.test((r.textContent||''))&&!/последние/i.test((r.textContent||''))});
 var ref=acc||(rows[2]?rows[2].nextSibling:null);
 if(ref&&ref.parentNode)root.insertBefore(wrap,ref);else root.appendChild(wrap);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(build,900)});else setTimeout(build,900);
})();
