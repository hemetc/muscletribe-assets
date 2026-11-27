(function(){
if(document.getElementById('mt-sock-final'))return;
var c=document.createElement('style');c.id='mt-sock-final';
c.textContent='.mt-sock-ic .t-product__option-title{display:none!important}'
+'.t-product__option-variants_simple .t-product__option-item{cursor:default!important}'
+'.t-product__option-variants_simple .t-product__option-checkmark{display:none!important}'
+'.t-product__option-variants_simple .t-product__option-item_active .t-product__option-title{background:#e2602f!important;color:#fff!important;border-color:#e2602f!important;outline:2px solid #e2602f!important;outline-offset:2px}';
document.head.appendChild(c);
function setDefault(){
 if(location.pathname.indexOf('/tproduct/172436217523')<0)return;
 var sizes=[...document.querySelectorAll('input[name="Размер"]')];
 if(!sizes.length)return;var cur=document.querySelector('input[name="Размер"]:checked');if(cur&&cur.value==='41–45')return;
 var mid=sizes.find(x=>x.value==='41–45')||sizes[Math.floor(sizes.length/2)];if(cur)cur.checked=false;
 if(mid){mid.checked=true;mid.dispatchEvent(new Event('change',{bubbles:true}))}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setDefault);else setDefault();
var iv=setInterval(setDefault,800);setTimeout(function(){clearInterval(iv)},10000);
})();
