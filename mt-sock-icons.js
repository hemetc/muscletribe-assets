(function(){
// Носки 172436217523: 6 иконок вариантов (5 дизайнов + комплект) и выбор состава комплекта кликами.
if(location.pathname.indexOf('/tproduct/172436217523')<0)return;
var CDN='https://static.tildacdn.com/';
var IMG={
 'Белые — 1 пара':CDN+'stor3134-3034-4364-b563-383465613335/49d0e664f9146df4f89df506c77089bd.png',
 'Чёрные — 1 пара':CDN+'stor3033-3339-4961-a363-633564373932/7ab0043b4b90eaf20093b5a0ebf05a32.png',
 'Розовые — 1 пара':CDN+'stor6563-6537-4664-b961-626361366635/378514164ef1ef847376b3986b692f67.png',
 'Бело-огненные One More Rep — 1 пара':CDN+'stor3534-6438-4263-a437-383833353962/9d815c4d81c423af046b347004290db9.png',
 'Бело-чёрные One More Rep — 1 пара':CDN+'stor6266-3961-4661-a233-663435393234/ae6df751d6dc6256fde1efaf3ed38444.png'
};
var BUNDLE='Комплект 3 на выбор',OLD_BUNDLE='Комплект 3 разные';
var CSS='.mt-sock-ic{width:72px!important;height:72px!important;min-width:72px!important;background-size:contain!important;background-repeat:no-repeat!important;background-position:center!important;border:2px solid transparent!important;border-radius:8px!important;box-sizing:border-box!important;overflow:hidden!important}'
+'.mt-sock-ic>*{display:none!important}.mt-sock-ic.t-product__option-item_active,.mt-sock-ic.on{border-color:var(--mt-accent)!important}'
+'.mt-sock-bundle{margin:14px 0;padding:12px;border:1px solid var(--mt-line);border-radius:8px;font:13px var(--mt-font-ui);display:none}'
+'.mt-sock-bundle .t{font-weight:600;margin-bottom:8px}.mt-sock-picks{display:flex;flex-wrap:wrap;gap:8px}'
+'.mt-sock-pick{width:64px!important;height:64px!important;padding:0!important;background-color:transparent!important;background-size:contain!important;background-repeat:no-repeat!important;background-position:center!important;border:2px solid transparent!important;border-radius:8px!important;cursor:pointer!important;box-sizing:border-box!important}'
+'.mt-sock-pick.on{border-color:var(--mt-accent)!important}.mt-sock-sum{margin-top:8px;color:#666;font-size:12px}';
function icon(el,url){
 el.style.setProperty('background-image','url("'+url+'")','important');
}
function build(){
 var prod=document.querySelector('[data-product-gen-uid="172436217523"]');if(!prod||prod.dataset.mtSock==='1')return;
 var inputs=Array.prototype.filter.call(prod.querySelectorAll('input[name="Вариант"]'),function(x){return x.type==='radio'});
 if(inputs.length<6)return;
 var s=document.createElement('style');s.textContent=CSS;prod.appendChild(s);
 inputs.forEach(function(inp){
  var lab=inp.closest('label');if(!lab)return;
  if(inp.value===OLD_BUNDLE){lab.style.setProperty('display','none','important');return}
  lab.classList.add('mt-sock-ic');lab.title=inp.value;
  if(IMG[inp.value])icon(lab,IMG[inp.value]);
  else if(inp.value===BUNDLE){
    icon(lab,IMG['Белые — 1 пара']);
    lab.style.setProperty('background-image','url("'+IMG['Белые — 1 пара']+'"),url("'+IMG['Чёрные — 1 пара']+'")','important');
    lab.style.setProperty('background-size','50% 100%,50% 100%','important');
    lab.style.setProperty('background-position','left center,right center','important');
    lab.style.setProperty('background-repeat','no-repeat,no-repeat','important');
  }
 });
 var wrap=document.createElement('div');wrap.className='mt-sock-bundle';
 wrap.innerHTML='<div class="t">Комплект: выбери 3 дизайна</div><div class="mt-sock-picks"></div><div class="mt-sock-sum"></div>';
 var picksBox=wrap.querySelector('.mt-sock-picks');
 var names=Object.keys(IMG);
 var state={any:false,picks:[]};
 names.concat(['__any__']).forEach(function(v){
   var b=document.createElement('button');b.type='button';b.className='mt-sock-pick';b.setAttribute('data-v',v);
   b.title=v==='__any__'?'Любые пары на складе':v;
   if(v==='__any__'){
     b.style.setProperty('background-image','url("'+IMG['Белые — 1 пара']+'"),url("'+IMG['Чёрные — 1 пара']+'")','important');
     b.style.setProperty('background-size','50% 100%,50% 100%','important');
     b.style.setProperty('background-position','left center,right center','important');
     b.style.setProperty('background-repeat','no-repeat,no-repeat','important');
   }else icon(b,IMG[v]);
   picksBox.appendChild(b);
 });
 function apply(){
   var btns=picksBox.querySelectorAll('.mt-sock-pick');
   Array.prototype.forEach.call(btns,function(b){
     var v=b.getAttribute('data-v');
     b.classList.toggle('on',v==='__any__'?state.any:state.picks.indexOf(v)>-1);
   });
   var sum=wrap.querySelector('.mt-sock-sum');
   var txt=state.any?'Любые 3 пары на складе':'Выбрано '+state.picks.length+' из 3'+(state.picks.length?' — '+state.picks.join(', '):'');
   sum.textContent=txt;
   var comment=state.any?'Комплект 3: любые пары на складе':'Комплект 3 на выбор: '+(state.picks.length?state.picks.join(', '):'на усмотрение склада');
   var c=document.querySelector('input[name="form-spec-comments"]');if(c)c.value=comment;
   try{sessionStorage.setItem('mtSockBundle',comment)}catch(e){}
 }
 picksBox.addEventListener('click',function(e){
   var b=e.target.closest('.mt-sock-pick');if(!b)return;
   var v=b.getAttribute('data-v');
   if(v==='__any__'){state.any=!state.any;state.picks=[]}
   else{
     state.any=false;
     var i=state.picks.indexOf(v);
     if(i>-1)state.picks.splice(i,1);
     else{state.picks.push(v);if(state.picks.length>3)state.picks.shift()}
   }
   apply();
 });
 function sync(){
   var sel=Array.prototype.filter.call(prod.querySelectorAll('input[name="Вариант"]'),function(x){return x.checked})[0];
   wrap.style.display=(sel&&sel.value===BUNDLE)?'block':'none';
 }
 Array.prototype.forEach.call(inputs,function(x){x.addEventListener('change',sync)});
 var anchor=inputs[0].closest('.t-product__option-variants')||inputs[0].parentElement;
 if(!anchor||!anchor.parentNode)return;
 anchor.parentNode.insertBefore(wrap,anchor.nextSibling);
 var c=document.querySelector('input[name="form-spec-comments"]');
 if(c&&sessionStorage.getItem('mtSockBundle'))c.value=sessionStorage.getItem('mtSockBundle');
 apply();sync();prod.dataset.mtSock='1';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
var t=0,iv=setInterval(function(){build();if(++t>10)clearInterval(iv)},1000);
})();
