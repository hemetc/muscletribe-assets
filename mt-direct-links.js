(function(){
// Tilda Store открывает товар в popup. Перехватываем клик по карточке и ведём по прямой ссылке.
var done=false;
function patch(){
  if(done)return;
  var links=document.querySelectorAll('a[href*="/tproduct/"]');
  if(!links.length)return;
  done=true;
  for(var i=0;i<links.length;i++){
    links[i].addEventListener('click',function(e){
      var a=this,href=a.getAttribute('href')||'';
      if(!href||href.charAt(0)==='#')return;
      e.preventDefault();e.stopPropagation();
      if(e.metaKey||e.ctrlKey||e.shiftKey||e.button===1){window.open(href,'_blank');}
      else{location.href=href;}
    },true);
  }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',patch);else patch();
var iv=setInterval(function(){if(!done)patch();if(done&&document.querySelectorAll('a[href*="/tproduct/"]').length>20)clearInterval(iv)},1200);
setTimeout(function(){clearInterval(iv)},15000);
})();
