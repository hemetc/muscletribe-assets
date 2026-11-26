(function(){
// Cross-sell v5: recommendations + bundle discounts. No old prices.
var uid=(location.pathname.match(/\/tproduct\/(\d+)/)||[])[1];if(!uid)return;
var PARTS={TS:'377605268422',HD:'840956369503',HT:'288428792103',PT:'735345935242',SK:'619819505142',AC:'915480056633',LS:'755203572753'};
var COMP={TS:['HD','HT','SK','PT'],HD:['HT','PT','SK'],HT:['HD','TS','AC'],PT:['TS','HT','SK'],SK:['TS','HD','HT'],AC:['TS','SK','HT'],LS:['TS','HT','SK']};
function pct(n){return n===2?5:n===3?10:(n===4||n===5)?15:n>5?20:0}
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
 var css=document.createElement('style');css.textContent='#mt-crosssell{max-width:900px;margin:26px auto;padding:0 16px;font-family:var(--mt-font-ui);color:var(--mt-text)}#mt-crosssell h2{font-size:22px;letter-spacing:.06em;margin:0 0 14px;text-transform:uppercase}#mt-crosssell .mt-cs-row{display:flex;gap:10px;overflow-x:auto;padding-bottom:10px}#mt-crosssell .mt-cs-card{flex:0 0 170px;border:1px solid var(--mt-line);border-radius:8px;overflow:hidden;background:#fff;text-decoration:none;color:inherit}#mt-crosssell .mt-cs-card img{width:100%;height:170px;object-fit:cover;background:#f4f4f4;display:block}#mt-crosssell .mt-cs-body{padding:8px}#mt-crosssell .mt-cs-n{font-size:12px;line-height:1.35;min-height:32px}#mt-crosssell .mt-cs-p{font-weight:700;color:var(--mt-accent);margin-top:5px}#mt-crosssell .mt-cs-add{margin-top:6px;width:100%;border:1px solid var(--mt-ink);background:transparent;border-radius:20px;padding:6px;font:600 11px var(--mt-font-ui);cursor:pointer}#mt-crosssell .mt-cs-add.on{background:var(--mt-accent);color:#fff;border-color:var(--mt-accent)}#mt-crosssell .mt-cs-sum{margin-top:12px;padding:12px;border:1px solid var(--mt-line);border-radius:8px;font-size:13px;line-height:1.7}#mt-crosssell .mt-cs-total{font-size:18px;font-weight:800}#mt-crosssell .mt-cs-disc{color:var(--mt-accent)}#mt-crosssell .mt-cs-hint{font-size:11px;color:var(--mt-muted);margin-top:8px}';root.appendChild(css);
 var h=document.createElement('h2');h.textContent='Смотрите также';root.appendChild(h);
 var row=document.createElement('div');row.className='mt-cs-row';root.appendChild(row);
 var chosen={};
 picked.forEach(function(p){var a=document.createElement('a');a.className='mt-cs-card';a.href=p.url;a.target='_blank';a.rel='noopener';a.innerHTML='<img loading="lazy" src="'+img(p)+'" alt=""><div class="mt-cs-body"><div class="mt-cs-n">'+p.title+'</div><div class="mt-cs-p">'+fmt(money(p.price))+'</div><button class="mt-cs-add" type="button">+ Добавить</button></div>';row.appendChild(a);var b=a.querySelector('.mt-cs-add');b.onclick=function(e){e.preventDefault();e.stopPropagation();chosen[p.uid]=chosen[p.uid]?0:1;b.classList.toggle('on',!!chosen[p.uid]);b.textContent=chosen[p.uid]?'✓ В образе':'+ Добавить';sum()}});
 var sumBox=document.createElement('div');sumBox.className='mt-cs-sum';root.appendChild(sumBox);
 var hint=document.createElement('div');hint.className='mt-cs-hint';hint.textContent='Скидка за комплект: 5% от 2 товаров, 10% от 3, 15% от 4–5, 20% от 6 и более. Не суммируется с другими промо.';root.appendChild(hint);
 function sum(){var items=[cur];picked.forEach(function(p){if(chosen[p.uid])items.push(p)});var sub=0;items.forEach(function(p){sub+=money(p.price)});var d=pct(items.length);var disc=d?Math.round(sub*d/100):0;sumBox.innerHTML='<div>Товаров в образе: <b>'+items.length+'</b></div><div>Сумма: <b>'+fmt(sub)+'</b></div>'+(d?'<div class="mt-cs-disc">Скидка '+d+'%: −'+fmt(disc)+'</div>':'')+'<div class="mt-cs-total">Итого: '+fmt(sub-disc)+'</div>'}
 sum();
 var host=document.querySelector('.js-store-prod-slider')||document.querySelector('[data-product-gen-uid="'+uid+'"]')||document.querySelector('.t-store__prod-popup__gallery');
 if(host&&host.parentNode)host.parentNode.insertBefore(root,host.nextSibling);else document.body.appendChild(root);
}
Promise.all(Object.keys(PARTS).map(function(k){return fetch(HOST+PARTS[k],{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){return {k:k,list:j.products||[]}}).catch(function(){return {k:k,list:[]}})})).then(function(res){var all=[],seen={};res.forEach(function(r){r.list.forEach(function(p){if(!seen[p.uid]){seen[p.uid]=all.length+1;p._cats=[];all.push(p)}if(all[seen[p.uid]-1])all[seen[p.uid]-1]._cats.push(r.k)})});build(all)}).catch(function(){});
})();
