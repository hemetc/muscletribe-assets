(function(){
// Cross-sell v8: recommendations only. Click -> product card. No bundle builder.
var uid=(location.pathname.match(/\/tproduct\/(\d+)/)||[])[1];if(!uid)return;
var PARTS={TS:'377605268422',HD:'840956369503',HT:'288428792103',PT:'735345935242',SK:'619819505142',AC:'915480056633',LS:'755203572753'};
var COMP={TS:['HD','HT','SK','PT'],HD:['HT','PT','SK'],HT:['HD','TS','AC'],PT:['TS','HT','SK'],SK:['TS','HD','HT'],AC:['TS','SK','HT'],LS:['TS','HT','SK']};
function money(v){var n=Number(String(v==null?'':v).replace(/[^\d.,]/g,'').replace(',','.'))||0;return Math.round(n)}
function fmt(n){return n.toLocaleString('ru-RU').replace(/\u00a0/g,' ')+' ₽'}
function img(p){try{var g=JSON.parse(p.gallery||'[]');return g&&g[0]&&g[0].img||''}catch(e){return ''}}
var HOST='https://store.tildaapi.com/api/getproductslist/?recid=mt&getparts=true&getoptions=true&slice=1&size=60&flag_root=withroot&storepartuid=';
function build(all){
 var cur=null;all.forEach(function(p){if(String(p.uid)===uid)cur=p});if(!cur)return;
 var myCat=Object.keys(PARTS).filter(function(k){return (cur._cats||[]).indexOf(k)>=0})[0]||'TS';
 var comp=COMP[myCat]||[];
 var cand=all.filter(function(p){return String(p.uid)!==uid&&p.off!=='y'&&money(p.price)>0});
 cand.forEach(function(p){var s=0;p._cats.forEach(function(c){if(c===myCat)s+=5;if(comp.indexOf(c)>=0)s+=4});if(/оверсайз|новинк/i.test(p.title||''))s+=2;p._score=s});
 cand.sort(function(a,b){return b._score-a._score||(b.sort-a.sort)});
 var picked=[],seen={};cand.forEach(function(p){if(picked.length>=6||seen[p.uid])return;seen[p.uid]=1;picked.push(p)});
 if(!picked.length)return;
 var root=document.createElement('div');root.id='mt-crosssell';root.className='mt-cs';
 var css=document.createElement('style');css.textContent='#mt-crosssell{width:100%;margin:26px 0;padding:0 16px;box-sizing:border-box;font-family:var(--mt-font-ui);color:var(--mt-text)}#mt-crosssell h2{font-size:22px;letter-spacing:.06em;margin:0 0 14px;text-transform:uppercase}#mt-crosssell .mt-cs-row{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:12px}@media(max-width:900px){#mt-crosssell .mt-cs-row{grid-template-columns:repeat(2,minmax(0,1fr))}}#mt-crosssell .mt-cs-card{border:1px solid var(--mt-line);border-radius:8px;overflow:hidden;background:#fff;text-decoration:none;color:inherit;display:block}#mt-crosssell .mt-cs-card img{width:100%;height:170px;object-fit:cover;background:#f4f4f4;display:block}#mt-crosssell .mt-cs-body{padding:8px}#mt-crosssell .mt-cs-n{font-size:12px;line-height:1.35;min-height:32px}#mt-crosssell .mt-cs-p{font-weight:700;color:var(--mt-accent);margin-top:5px}';root.appendChild(css);
 var h=document.createElement('h2');h.textContent='Смотрите также';root.appendChild(h);
 var row=document.createElement('div');row.className='mt-cs-row';root.appendChild(row);
 picked.forEach(function(p){var a=document.createElement('a');a.className='mt-cs-card';a.href=p.url;a.innerHTML='<img loading="lazy" src="'+img(p)+'" alt=""><div class="mt-cs-body"><div class="mt-cs-n">'+p.title+'</div><div class="mt-cs-p">'+fmt(money(p.price))+'</div></div>';row.appendChild(a)});
 var ftr=document.getElementById('t-footer');
 if(ftr&&ftr.parentNode)ftr.parentNode.insertBefore(root,ftr);else document.body.appendChild(root);
}
Promise.all(Object.keys(PARTS).map(function(k){return fetch(HOST+PARTS[k],{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){return {k:k,list:j.products||[]}}).catch(function(){return {k:k,list:[]}})})).then(function(res){var all=[],seen={};res.forEach(function(r){r.list.forEach(function(p){if(!seen[p.uid]){seen[p.uid]=all.length+1;p._cats=[];all.push(p)}if(all[seen[p.uid]-1])all[seen[p.uid]-1]._cats.push(r.k)})});build(all)}).catch(function(){});
})();
