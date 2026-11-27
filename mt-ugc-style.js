(function(){
if(document.getElementById('mt-ugc-style'))return;
var c=document.createElement('style');c.id='mt-ugc-style';
c.textContent='.mt-ugc-v5 .card{width:min(460px,calc(100vw - 32px))!important;max-height:calc(100vh - 32px)!important;overflow:auto!important;padding:20px!important;border-radius:14px!important}'
+'.mt-ugc-v5 .zone{min-height:120px!important;padding:12px!important;margin:10px 0!important}'
+'.mt-ugc-v5 .zone img{max-height:180px!important;width:auto!important;margin:8px auto!important;display:block!important}'
+'.mt-ugc-v5 input[type=text]{width:100%!important;box-sizing:border-box!important;min-height:44px!important;padding:10px 12px!important;font-size:15px!important}'
+'.mt-ugc-v5 .go{width:100%!important;min-height:46px!important;font-size:15px!important}'
+'.mt-ugc-v5 .fine{font-size:12px!important;line-height:1.4!important;color:#777!important}'
+'@media(max-width:640px){'
+'.mt-ugc-v5{padding:0!important;align-items:stretch!important}'
+'.mt-ugc-v5 .card{width:100vw!important;max-width:100vw!important;height:100dvh!important;max-height:100dvh!important;border-radius:0!important;padding:18px 16px calc(18px + env(safe-area-inset-bottom))!important}'
+'.mt-ugc-v5 .zone img{max-height:36vh!important}'
+'.mt-ugc-v5 input[type=text]{font-size:16px!important}'
+'.mt-ugc-v5 .x{position:sticky!important;top:0!important;float:right!important}'
+'}';
document.head.appendChild(c);
})();
