(function(){
if(document.getElementById('mt-transition-svg'))return;
var c=document.createElement('style');c.id='mt-transition-svg';
c.textContent='.t396__elem .tn-atom[style*="tild3837-3864-4732-b861-346132356263"],'
+'.tn-atom[data-original*="tild3837-3864-4732-b861-346132356263"]{height:28px!important;min-height:28px!important;width:100vw!important;max-width:none!important;background-size:100% 28px!important;background-repeat:no-repeat!important;background-position:center!important}'
+'.t396__elem:has(.tn-atom[style*="tild3837-3864-4732-b861-346132356263"]){height:28px!important;left:0!important;width:100vw!important}';
document.head.appendChild(c);
function fit(){[...document.querySelectorAll('.tn-atom')].filter(x=>/tild3837-3864-4732-b861-346132356263/.test((x.style.backgroundImage||'')+(x.getAttribute('data-original')||''))).forEach(function(a){a.style.setProperty('height','28px','important');a.style.setProperty('width','100vw','important');a.style.setProperty('background-size','100% 28px','important');a.style.setProperty('background-repeat','no-repeat','important')})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fit);else fit();
})();
