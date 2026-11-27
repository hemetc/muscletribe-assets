(function(){
var K='mt-store-native';
if(document.getElementById(K)||location.pathname!=='/')return;
var API='https://store.tildaapi.com/api/getproductslist/';
var PARTS=[['Футболки','377605268422'],['Худи','840956369503'],['Шапки','288428792103'],['Штаны','735345935242'],['Носки','619819505142'],['Аксессуары','915480056633'],['Последние размеры','755203572753']];
var CSS='#'+K+'{clear:both;width:100vw;max-width:none;margin-left:calc(50% - 50vw);padding:24px 16px 10px;background:#191919;font:14px/1.45 Manrope,Arial,sans-serif}'
+'#'+K+' .h{color:#e2602f;font-size:30px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;margin:0 0 18px}'
+'#'+K+' .f{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px}'
+'#'+K+' .f button{background:#222;color:#eee;border:1px solid #333;border-radius:7px;padding:8px 14px;cursor:pointer;font:inherit}'
+'#'+K+' .f button.on{background:#e2602f;border-color:#e2602f;color:#fff;font-weight:700}'
+'#'+K+' .g{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px}'
+'#'+K+' .c{display:block;text-decoration:none;color:#eee;background:#1b1b1b;border-radius:8px;overflow:hidden}'
+'#'+K+' .c img{display:block;width:100%;aspect-ratio:1;object-fit:cover;background:#222}'
+'#'+K+' .c .b{padding:10px}'+'#'+K+' .c .t{font-size:13px;min-height:34px}'+'#'+K+' .c .d{font-size:11px;color:#888;min-height:16px}'+'#'+K+' .c .p{color:#e2602f;font-weight:700;margin-top:6px}'
+'#'+K+' .more{display:block;margin:20px auto 0;padding:12px 20px;background:#191919;color:#eee;border:1px solid #444;text-decoration:none;text-transform:uppercase;letter-spacing:.1em;font-size:12px}';
var state={cat:'all',page:0},cache={},PER=12;
function fmt(s){var n=parseFloat(String(s||'').replace(/[^d.]/g,''));return isFinite(n)&&n?Math.round(n).toLocaleString('ru-RU').replace(/ /g,' '):''}
function img(p){try{var g=JSON.parse(p.gallery||'[]');return g&&g[0]&&g[0].img||''}catch(e){return ''}}
function build(){
 var root=document.getElementById('mt-catalog-carousel');if(!root||document.getElementById(K))return;
 var wrap=document.createElement('div');wrap.id=K;var st=document.createElement('style');st.textContent=CSS;wrap.appendChild(st);
 var h=document.createElement('div');h.className='h';h.textContent='Каталог MUSCLE TRIBE';wrap.appendChild(h);
 var f=document.createElement('div');f.className='f';
 [{k:'all',t:'Всё'},{k:'Футболки',t:'Футболки'},{k:'Худи',t:'Худи'},{k:'Шапки',t:'Шапки'},{k:'Штаны',t:'Штаны'},{k:'Носки',t:'Носки'},{k:'Аксессуары',t:'Аксессуары'},{k:'Последние размеры',t:'Скидки'}].forEach(function(x){var b=document.createElement('button');b.textContent=x.t;b.dataset.k=x.k;if(x.k==='all')b.classList.add('on');b.onclick=function(){state.cat=x.k;state.page=0;[...f.children].forEach(function(y){y.classList.toggle('on',y===b)});render()};f.appendChild(b)});
 wrap.appendChild(f);
 var g=document.createElement('div');g.className='g';wrap.appendChild(g);
 var more=document.createElement('a');more.className='more';more.href='https://muscletribe.ru/catalog';more.textContent='Смотреть весь каталог →';wrap.appendChild(more);
 var rows=[...root.querySelectorAll('.mt-row')];var acc=rows.find(function(r){return /Ланьярд|Шоппер/.test((r.textContent||''))&&!/последние/i.test((r.textContent||''))});
 if(acc&&acc.parentNode)root.insertBefore(wrap,acc);else root.appendChild(wrap);
 // загрузка одногоmirror вместо iframe
 var urls=PARTS.map(function(x){return API+'?storepartuid='+x[1]+'&recid=mt&slice=1&size=48&getparts=true&getoptions=true'});
 Promise.all(urls.map(function(u){return fetch(u,{cache:'no-store'}).then(function(r){return r.json()}).catch(function(){return {products:[]}})})).then(function(rs){
  var seen={};rs.forEach(function(j,i){var cat=PARTS[i][0];(j.products||[]).forEach(function(p){if(p.off==='y'||seen[p.uid])return;seen[p.uid]=1;p._cat=cat;cache[p.uid]=p})});
  render();
 });
 function render(){
  g.innerHTML='';var list=Object.keys(cache).map(function(u){return cache[u]});
  if(state.cat!=='all')list=list.filter(function(p){return p._cat===state.cat});
  list=list.slice(state.page*PER,(state.page+1)*PER);
  list.forEach(function(p){var a=document.createElement('a');a.className='c';a.href='https://muscletribe.ru/tproduct/'+p.uid;a.target='_blank';a.innerHTML='<img loading="lazy" src="'+img(p)+'" alt=""><div class="b"><div class="t">'+String(p.title||'').slice(0,46)+'</div><div class="d">'+(p.descr||'').slice(0,40)+'</div><div class="p">'+fmt(p.price)+' р.</div></div>';g.appendChild(a)});
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(build,900)});else setTimeout(build,900);
})();
