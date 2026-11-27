(function(){
function mount(){
 var d=document.querySelector('.tn-elem__1522256671176235189004952880 .tn-atom');
 if(d&&!d.dataset.mtDelivery){var h=d.innerHTML;if(h.indexOf('от 5000')>=0){d.dataset.mtDelivery='1';d.innerHTML=h.replace(/от 5000/g,'от 10 000');}}
 if(location.pathname==='/'||location.pathname.indexOf('/catalog')===0){
  if(document.querySelector('h1.mt-seo-h1'))return;
  var c=document.createElement('style');c.textContent='.mt-seo-h1{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}';document.head.appendChild(c);
  var h1=document.createElement('h1');h1.className='mt-seo-h1';h1.textContent=(document.title||'Muscle Tribe').split('|')[0].trim();
  (document.getElementById('allrecords')||document.body).insertBefore(h1,(document.getElementById('allrecords')||document.body).firstChild);
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
var iv=setInterval(mount,1000);setTimeout(function(){clearInterval(iv)},12000);
})();
