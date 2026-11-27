(function(){
var EP='https://script.google.com/macros/s/AKfycbwaIJvy6yByqY0UCHCZUZZObMDosPUJGUdUnnjVw482_z0E-baqqB5QnolhZtHItlvR3A/exec',SEC='mtlive-ugc-2026-pilot';
function uid(){var m=location.pathname.match(/\/tproduct\/(\d+)/);return m?m[1]:''}
function init(){
 if(location.pathname.indexOf('/tproduct/')<0)return;
 if(document.getElementById('mt-ugc-v3'))return;
 var btn=document.querySelector('.mt-live-addbtn');if(!btn)return;
 var css=document.createElement('style');css.textContent=
 '.mt-live-modal{display:none!important}'+
 '.mt-ugc-v2{position:fixed;inset:0;z-index:2147483646;background:rgba(12,12,12,.78);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:16px;font:14px/1.45 Manrope,Arial,sans-serif;color:#191919}'+
 '.mt-ugc-v2 .card{background:#fff;width:100%;max-width:420px;border-radius:16px;padding:22px;position:relative;box-shadow:0 24px 70px rgba(0,0,0,.4)}'+
 '.mt-ugc-v2 .brand{font-size:10px;letter-spacing:.18em;color:#e2602f;font-weight:800;margin-bottom:8px}'+
 '.mt-ugc-v2 h3{font-size:21px;margin:0 0 6px;line-height:1.2}'+
 '.mt-ugc-v2 p{color:#757575;font-size:12px;margin:0 0 14px}'+
 '.mt-ugc-v2 .zone{border:1px solid #e6e4df;border-radius:10px;background:#f7f6f3;padding:18px;text-align:center;cursor:pointer;transition:.2s}'+
 '.mt-ugc-v2 .zone:hover{border-color:#e2602f;background:#fff7f3}'+
 '.mt-ugc-v2 .zone b{display:block;font-size:13px;margin-top:6px}.mt-ugc-v2 .zone span{font-size:11px;color:#999}'+
 '.mt-ugc-v2 .zone img{display:none;width:100%;max-height:180px;object-fit:contain;border-radius:8px;margin-top:8px}'+
 '.mt-ugc-v2 input[type=text]{width:100%;box-sizing:border-box;border:1px solid #ddd;border-radius:8px;padding:11px;font:13px Manrope,Arial,sans-serif;margin:12px 0 6px;min-height:42px}'+
 '.mt-ugc-v2 label{display:flex;gap:8px;font-size:11px;color:#757575;align-items:flex-start;margin:8px 0}'+
 '.mt-ugc-v2 button.go{width:100%;background:#e2602f;color:#fff;border:0;border-radius:9px;padding:13px;font:700 14px Manrope,Arial,sans-serif;cursor:pointer;min-height:44px}'+
 '.mt-ugc-v2 .fine{font-size:10px;color:#aaa;margin:10px 0 0;text-align:center}'+
 '.mt-ugc-v2 .x{position:absolute;right:14px;top:12px;border:0;background:none;font-size:20px;color:#999;cursor:pointer}';
 document.head.appendChild(css);
 var ov=document.createElement('div');ov.className='mt-ugc-v2';ov.id='mt-ugc-v2';
 ov.innerHTML='<div class="card"><button class="x" type="button">×</button><div class="brand">MUSCLE TRIBE · СЕМЕЙНЫЙ АЛЬБОМ</div><h3>Кинь фото — получи свой код</h3><p>Первому фото — <b>10%</b>, следующим — <b>5%</b>. После аппрува кадр появится в «Семейном альбоме» товара, а код придёт на указанный контакт.</p><div class="zone">📷<b>Нажми или перетащи фото</b><span>JPG / PNG / WebP, до 10 МБ</span><img alt=""></div><input type="text" placeholder="Куда прислать код? @Telegram / email / телефон"><label><input type="checkbox" checked> Подтверждаю права на фото и согласен на публикацию</label><button class="go" type="button">Отправить фото</button><p class="fine">Код действует <b>30 дней</b> · один на аккаунт в 7 дней · не суммируется с другими UGC-скидками. До аппрува рассылки нет.</p></div>';
 document.body.appendChild(ov);ov.style.display='none';
 var zone=ov.querySelector('.zone'),file=ov.querySelector('input[type=file]');
 if(!file){file=document.createElement('input');file.type='file';file.accept='image/jpeg,image/png,image/webp';file.style.display='none';ov.appendChild(file)}
 zone.onclick=function(){file.click()};
 file.onchange=function(){var f=file.files[0];if(!f)return;var fr=new FileReader();fr.onload=function(){var im=ov.querySelector('.zone img');im.src=fr.result;im.style.display='block'};fr.readAsDataURL(f)};
 ov.querySelector('.x').onclick=function(){ov.style.display='none'};
 ov.onclick=function(e){if(e.target===ov)ov.style.display='none'};
 ov.querySelector('.go').onclick=function(){
  var f=file.files[0];if(!f){zone.click();return}
  var contact=ov.querySelector('input[type=text]').value.trim();if(!contact){alert('Укажи контакт для кода');return}
  var fr=new FileReader();fr.onload=function(){
   var body={action:'ugc_submit',secret:SEC,uid:uid(),file_base64:String(fr.result).split('base64,').pop(),mime:f.type||'image/jpeg',file_name:f.name,product_title:(document.querySelector('h1')||{}).textContent||'',product_url:location.href.split('?')[0],contact_type:contact.charAt(0)==='@'?'telegram':(contact.indexOf('@')>-1?'email':'phone'),contact_value:contact,consent_pd:true,consent_publish:true,consent_version:'v1'};
   fetch(EP+'?action=ugc_submit',{method:'POST',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify(body)}).then(function(r){return r.text()}).then(function(){ov.querySelector('.go').textContent='Принято! После аппрува придёт код';setTimeout(function(){ov.style.display='none'},2500)}).catch(function(){alert('Ошибка отправки — попробуй ещё раз')});
  };fr.readAsDataURL(f);
 };
 [btn,document.querySelector('.mt-live-strip__add')].filter(Boolean).forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();ov.style.display='flex'},true)});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
var iv=setInterval(init,1000);setTimeout(function(){clearInterval(iv)},15000);
})();
