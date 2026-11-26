
(function(){
 var host=location.hostname;
 var live=/^(www\.)?muscletribe\.ru$/.test(host);
 var prev=/\.tilda\.(ws|ru)$/.test(host)&&/91348366/.test(location.search);
 if(!live&&!prev)return;

 var PARTS={TS:'377605268422',HD:'840956369503',HT:'288428792103',PT:'735345935242',SK:'619819505142',AC:'915480056633',LS:'755203572753'};

 /* Реальный рейтинг заказов: CRM «Заявки с Muscle Tribe», 22 заказа / 52 550 ₽ / 19 UID.
    Формат UID: [штук, сумма ₽, последняя дата]. Снимок зафиксирован 19.11.2026. */
 var SALES={
  '172436217523':[4,2050,'2026-11-13'],'418943462782':[4,1950,'2026-11-10'],
  '318491354272':[3,6000,'2026-05-13'],'438442564172':[3,1650,'2026-11-10'],
  '409101202933':[2,6000,'2026-11-13'],'809134885162':[2,4000,'2026-09-14'],
  '317360187633':[2,700,'2026-11-13'],'725074277072':[1,3500,'2026-10-30'],
  '192834629392':[1,3500,'2026-10-09'],'733815175052':[1,3500,'2026-08-23'],
  '396274111353':[1,3000,'2026-11-13'],'791359473273':[1,2500,'2026-11-19'],
  '692269322743':[1,2500,'2026-11-12'],'775361511902':[1,2000,'2026-10-27'],
  '485757333802':[1,2000,'2026-10-27'],'233709405032':[1,2000,'2026-10-24'],
  '212366923722':[1,2000,'2026-09-02'],'904709462272':[1,2000,'2026-08-23'],
  '251707195173':[1,1700,'2026-11-10']
 };
 var OLD=['1521893361','6013452201','6000742301','6012924801','6013648501','6013653201','6013729701','6013719001','6013722001','6013722401','6013723201','6013723401','6013723901','6013725001'];

 function num(v){var s=String(v==null?'':v).replace(/[^\d.,]/g,'').replace(',','.');var n=parseFloat(s);return isFinite(n)?n:0}
 function fmt(v){var n=num(v);return n?Math.round(n).toLocaleString('ru-RU').replace(/\u00a0/g,' '):''}
 function img(p){try{var g=JSON.parse(p.gallery||'[]');return g&&g[0]&&g[0].img||''}catch(e){return ''}}
 function hash(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
 function rng(seed){var x=seed||1;return function(){x^=x<<13;x^=x>>>17;x^=x<<5;return ((x>>>0)%100000)/100000}}
 function shuffled(a,seed){var r=rng(seed),b=a.slice();for(var i=b.length-1;i>0;i--){var j=Math.floor(r()*(i+1));var t=b[i];b[i]=b[j];b[j]=t}return b}
 function perView(n){if(n<=4)return n;var ks=[4,3,5,6];for(var i=0;i<ks.length;i++)if(n%ks[i]===0)return ks[i];return 4}
 function dayKey(off){var d=new Date();d.setDate(d.getDate()+off);return d.toISOString().slice(0,10)}

 /* Никаких зачёркнутых цен, плашек 11.11 и упоминаний выгоды.
    «Распродажа» = только реальный раздел Store SALE (643780766953),
/*     минус новые карточки и товары других разделов (носки, бейсболки, аксессуары). */
 var NOT_SALE={'701461427563':1,'990128711703':1,'262106972863':1,'172436217523':1,'237571651022':1,'705979681673':1,'468353113643':1};
 function isDisc(p){return (p._cats||[]).indexOf('LS')>=0 && !NOT_SALE[p.uid]}
 /* Плашки NEW сняты с карточек 20.11.2026. Явный список сохраняет логику отбора новых
    в строках 2–4 после удаления mark; защищённая 189159072043 оставлена с mark NEW
/*     и тоже входит в список. Акция носков 3 пары за 1000 — не NEW. */
 var NEW_UIDS={'613092022273':1,'116215902803':1,'791359473273':1,'189159072043':1,'468353113643':1,'965087148033':1,'309131892153':1,'452086662663':1,'262652844513':1,'493914008383':1,'396274111353':1,'409101202933':1,'692269322743':1,'149968320953':1,'334775768823':1};
 function isNew(p){return !!NEW_UIDS[p.uid]}
 function salesOf(p){var s=SALES[p.uid]||[0,0,''];return {q:s[0],a:s[1],last:s[2]}}

 function bySales(a,b){var x=salesOf(a),y=salesOf(b);return y.q-x.q||y.a-x.a||(y.last>x.last?1:y.last<x.last?-1:0)||(b.sort-a.sort)}
 function byLeastSold(a,b){var x=salesOf(a),y=salesOf(b);return x.q-y.q||x.a-y.a||(y.last<x.last?1:y.last>x.last?-1:0)||(b.sort-a.sort)}
 function byNew(a,b){return (isNew(b)?1:0)-(isNew(a)?1:0)||(b.sort-a.sort)}
 function uniq(a){var seen={},out=[];a.forEach(function(p){if(p&&!seen[p.uid]){seen[p.uid]=1;out.push(p)}});return out}
 function without(base,ex){var s={};ex.forEach(function(p){s[p.uid]=1});return base.filter(function(p){return !s[p.uid]})}
 function take(pool,n,fn){return pool.slice().sort(fn).slice(0,n)}

 /* Строка 1: 70% реальные продажи + 30% самые непродаваемые из распродажи. */
 function pickPopular(pool,n){
  var nSales=Math.round(n*0.7),nLeast=n-nSales;
  var sales=take(pool,nSales,bySales);
  var rest=without(pool,sales);
  var least=take(rest.filter(isDisc),nLeast,byLeastSold);
  var out=uniq(sales.concat(least));
  if(out.length<n)out=uniq(out.concat(take(without(pool,out),n-out.length,bySales)));
  return out.slice(0,n);
 }
 /* Строки 2–4: 50% по продажам + 50% «в обратной пропорции»:
    70% из распродажи и 30% самые новые внутри этой половины. */
 function pickRow(pool,n){
  var nSales=Math.round(n*0.5),restN=n-nSales;
  var nSale=Math.round(restN*0.7),nNew=restN-nSale;
  var sales=take(pool,nSales,bySales);
  var rest=without(pool,sales);
  var sale=take(rest.filter(isDisc),nSale,byLeastSold);
  var fresh=take(without(rest,sale).filter(isNew),nNew,byNew);
  var out=uniq(sales.concat(sale,fresh));
  if(out.length<n)out=uniq(out.concat(take(without(pool,out),n-out.length,bySales)));
  return out.slice(0,n);
 }

 /* Разнообразие: берём по кругу из разных категорий, чтобы в строке не шли подряд шапки/футболки. */
 function diversePick(pools,n,seed){var out=[],pi=0,used={};var pools2=pools.filter(function(p){return p&&p.length});if(!pools2.length)return[];while(out.length<n){var added=false;for(var k=0;k<pools2.length&&out.length<n;k++){var pool=shuffled(pools2[k],hash((seed||'')+'|'+pi+'|'+k));var chosen=null;for(var j=0;j<pool.length;j++){if(!used[pool[j].uid]){chosen=pool[j];break}}if(chosen){used[chosen.uid]=1;out.push(chosen);added=true}}if(!added)break;pi++}return out.slice(0,n)};
 var offset=0,rowsData=[],rowFns=[];
 function card(p){
  var a=document.createElement('a');a.className='mt-card';a.href=p.url;a.target='_blank';a.rel='noopener';
  var now=fmt(p.price);
  var q=salesOf(p).q;var isLS=(p._cats||[]).indexOf('LS')>=0;var badge=p.mark?'<span class="mt-mark">'+p.mark+'</span>':(isLS?'<span class="mt-mark mt-last">Последние размеры</span>':(q>=2?'<span class="mt-mark mt-top">Топ</span>':(p._season?'<span class="mt-mark mt-season">сезон</span>':'')));
  a.innerHTML=badge+'<img loading="lazy" src="'+img(p)+'" alt=""><div class="mt-body"><div class="mt-t">'+p.title+'</div><div class="mt-p">'+now+' р.</div></div>';
  return a;
 }
 function render(){
  var root=document.getElementById('mt-catalog-carousel');if(!root)return;root.innerHTML='';
  rowsData.forEach(function(sec,si){
   var items=sec.items?shuffled(sec.items,hash(dayKey(offset)+'|'+si)):[];
   var pv=perView(items.length),pages=Math.ceil(items.length/pv);
   var box=document.createElement('section');box.className='mt-row';
   if(sec.title){var h=document.createElement('h2');h.className='mt-head'+(sec.sale?' mt-sale':'');h.textContent=sec.title;box.appendChild(h)}
   if(sec.sub){var s=document.createElement('div');s.className='mt-sub';s.textContent=sec.sub;box.appendChild(s)}
   if(sec.banners){var bw=document.createElement('div');bw.className='mt-banners';sec.banners.forEach(function(b){var ba=document.createElement('a');ba.className='mt-banner';ba.href=b.href;ba.innerHTML='<img loading="lazy" src="'+b.img+'" alt=""><span>'+b.label+'</span>';bw.appendChild(ba)});box.appendChild(bw);root.appendChild(box);return}
   var vp=document.createElement('div');vp.className='mt-vp';
   var track=document.createElement('div');track.className='mt-track';
   items.forEach(function(p){var c=card(p);c.style.flex='0 0 calc((100% - '+((pv-1)*14)+'px)/'+pv+')';track.appendChild(c)});
   vp.appendChild(track);
   var L=document.createElement('button');L.className='mt-arr l';L.textContent='‹';
   var R=document.createElement('button');R.className='mt-arr r';R.textContent='›';
   if(pages>1){vp.appendChild(L);vp.appendChild(R)}
   box.appendChild(vp);
   if(pages>1){
    var meta=document.createElement('div');meta.className='mt-meta';var cnt=document.createElement('span');meta.appendChild(cnt);box.appendChild(meta);
    var idx=0;
    function go(n){idx=Math.max(0,Math.min(pages-1,n));var t=track.children[idx*pv];var mx=Math.max(0,track.scrollWidth-vp.clientWidth);var sx=Math.min(t?t.offsetLeft:0,mx);track.style.transform='translateX('+(-sx)+'px)';cnt.textContent=(idx+1)+' / '+pages;L.disabled=idx===0;R.disabled=idx===pages-1}
    L.onclick=function(){go(idx-1)};R.onclick=function(){go(idx+1)};
    go(0);requestAnimationFrame(function(){go(idx)});rowFns.push(function(){go(idx)});
   }
   root.appendChild(box);
  });
 }
 function init(){
  var anchor=document.getElementById('rec1520457801');
  if(!anchor||document.getElementById('mt-catalog-carousel'))return;
  var keys=Object.keys(PARTS);
  Promise.all(keys.map(function(k){
   var u='https://store.tildaapi.com/api/getproductslist/?storepartuid='+PARTS[k]+'&recid=mt&c='+Date.now()+'&getparts=true&getoptions=true&slice=1&size=36&flag_root=withroot';
   return fetch(u,{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){return {k:k,list:j.products||[]}}).catch(function(){return {k:k,list:[]}});
  })).then(function(res){
   var map={};
   res.forEach(function(r){r.list.forEach(function(p){if(!map[p.uid]){p._cats=[];map[p.uid]=p}if(map[p.uid]._cats.indexOf(r.k)<0)map[p.uid]._cats.push(r.k)})});
   var all=Object.keys(map).map(function(u){return map[u]}).filter(function(p){return p.off!=="y"});
   var byCat=function(c){return all.filter(function(p){return p._cats.indexOf(c)>=0})};
   var LS=all.filter(function(p){return p.uid==='286120738833'});
   var ts=byCat('TS').filter(function(p){return p.uid!=='286120738833'});
   var hd=byCat('HD'),ht=byCat('HT'),sw=byCat('SW'),pt=byCat('PT'),sl=byCat('SL'),ac=byCat('AC');
   var SEASON_HATS={'890973161403':1,'462179982173':1};
var htSeason=ht.map(function(p){p._season=!!SEASON_HATS[p.uid];return p});
var SW_UIDS={'690796779062':1,'733815175052':1,'286120738833':1};
var swPool=all.filter(function(p){return SW_UIDS[p.uid]});
var cpPool=all.filter(function(p){return p.uid==='400947909303'}).concat(byCat('AC'));
var used={};
function fresh(list,n,seed){var r=rng(hash(seed)),b=[],seen={};list.forEach(function(p){if(p&&!used[p.uid]&&!seen[p.uid]){seen[p.uid]=1;b.push(p)}});for(var i=b.length-1;i>0;i--){var j=Math.floor(r()*(i+1)),t=b[i];b[i]=b[j];b[j]=t}var out=b.slice(0,n);out.forEach(function(p){used[p.uid]=1});return out}
var top=fresh(ts.concat(pt),12,'pick|'+dayKey(0));
var seasonal=fresh(all.filter(isNew).concat(htSeason,hd,pt,swPool),10,'new|'+dayKey(0));
var headAccPool=all.filter(function(p){return !['TS','HD','PT','LS'].some(function(c){return (p._cats||[]).indexOf(c)>=0})});
var headAcc=fresh(headAccPool.concat(cpPool),8,'headacc|'+dayKey(0));
var last=fresh(byCat('LS').filter(function(p){return !p.off}),6,'ls|'+dayKey(0));
rowsData=[
{items:top},
{banners:[
{label:'MAN',href:'https://muscletribe.ru/catalog?tfc_storepartuid%5B1780716421%5D=MAN&tfc_div=:::',img:'https://static.tildacdn.com/stor3131-3139-4462-b739-303063323137/d84b5b699bc5c8d1954079009f03b813.jpg'},
{label:'GRL',href:'https://muscletribe.ru/catalog?tfc_storepartuid%5B1780716421%5D=GRL&tfc_div=:::',img:'https://static.tildacdn.com/stor6234-6434-4163-b363-656435333863/88a303a51b06e961a3fc3197dfab38f3.png'},
{label:'ALL',href:'https://muscletribe.ru/catalog?tfc_storepartuid%5B1780716421%5D=UNISEX&tfc_div=:::',img:'https://static.tildacdn.com/stor6566-3330-4063-a363-346162386138/2282f90c64feb050faf4c3f3711c840d.png'}
]},
{items:seasonal},
{items:headAcc},
{sub:'распродажа: последние размеры',items:last}
];
var root=document.createElement('div');root.id='mt-catalog-carousel';
   anchor.parentNode.insertBefore(root,anchor.nextSibling);
   render();
   window.addEventListener('resize',function(){rowFns.forEach(function(f){f()})});
   OLD.forEach(function(id){var e=document.getElementById('rec'+id);if(e){e.classList.add('mt-hidden-by-carousel');e.style.display='none'}});
   window.__mtCarouselRows=function(){return rowsData.map(function(r){
     var it=r.items||[];
     return {title:r.title||'(без вывески)',sub:r.sub||'',n:it.length,
      sales:it.filter(function(p){return salesOf(p).q>0}).length,
      sale:it.filter(isDisc).length,
      fresh:it.filter(isNew).length,
      withOld:it.filter(function(p){return !!fmt(p.priceold)}).length,
      with111:it.filter(function(p){return /11\.11/.test(p.mark||'')}).length,
      uids:it.map(function(p){return p.uid})};
   })};
  }).catch(function(){});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(init,120)});else setTimeout(init,120);
})();
