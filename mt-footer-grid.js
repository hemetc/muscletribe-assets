(function(){
// Статичный адаптивный футер (тёмный) вместо «плывущего» Zero Block.
var CDN='https://static.tildacdn.com/';
var LOGO=CDN+'tild3238-3266-4961-b832-333836616333/_.svg';
var ICON_VK=CDN+'tild6530-3461-4630-b666-623864636636/photo.svg';
var ICON_TEL=CDN+'tild3230-3134-4833-b363-376636383232/photo.svg';
var ICON_MAIL=CDN+'tild6437-3039-4638-b662-613233306431/Vector.svg';
var B='https://muscletribe.ru/catalog?tfc_storepartuid%5B1780716421%5D=';
var E=[['Футболки','%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B8'],['Худи','%D0%A5%D1%83%D0%B4%D0%B8'],['Шапки','%D0%A8%D0%B0%D0%BF%D0%BA%D0%B8'],['Штаны','%D0%A8%D1%82%D0%B0%D0%BD%D1%8B'],['Носки','%D0%9D%D0%BE%D1%81%D0%BA%D0%B8'],['Аксессуары','%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B'],['Скидки','%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B8%D0%B5%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B']];
var CSS='#t-footer{background:var(--mt-ink)!important}'
+'#t-footer .mt-fg{display:grid!important;grid-template-columns:150px 1fr 300px;gap:0 44px;padding:40px 40px 34px;max-width:1400px;margin:0 auto;font:13px var(--mt-font-ui);color:var(--mt-muted-2);align-items:center;background:var(--mt-ink)}'
+'#t-footer .mt-fg .lg img{width:100px;height:auto;display:block}'
+'#t-footer .mt-fg .contacts{display:flex;flex-direction:row;flex-wrap:wrap;gap:12px 28px;align-items:flex-start;justify-content:space-between;min-width:0}'
+'#t-footer .mt-fg .crow{display:flex;align-items:flex-start;gap:8px}'
+'#t-footer .mt-fg .crow img{width:18px;height:18px;object-fit:contain;flex:0 0 18px;margin-top:0}'
+'#t-footer .mt-fg .crow a{color:#D8D8D8;text-decoration:none;white-space:nowrap;line-height:18px}'
+'#t-footer .mt-fg .crow .sub{display:block;font-size:11px;color:var(--mt-muted);margin-top:1px;line-height:14px}'
+'#t-footer .mt-fg .navsep{flex:0 0 100%;border:0;margin:40px 0 0;padding:0;display:flex;flex-wrap:wrap;justify-content:space-between;gap:14px 20px}'
+'#t-footer .mt-fg .navsep a{color:var(--mt-muted-2);text-decoration:none}#t-footer .mt-fg .navsep a:hover{color:var(--mt-accent)}'
+'#t-footer .mt-fg .legal{display:flex;flex-direction:column;gap:8px;font-size:11px;color:var(--mt-muted);text-align:right}'

+'#t-footer .mt-fg .legal a{color:var(--mt-muted);text-decoration:none}'
+'@media(max-width:900px){#t-footer .mt-fg{grid-template-columns:1fr;gap:22px;padding:26px 20px}#t-footer .mt-fg .legal{text-align:left}#t-footer .mt-fg .contacts,#t-footer .mt-fg .navsep{justify-content:flex-start;gap:14px 20px}}'
+'#t-footer .t-rec{display:none!important}';
function build(){
 var f=document.querySelector('#t-footer');if(!f||f.querySelector('.mt-fg'))return;
 var s=document.createElement('style');s.textContent=CSS;f.appendChild(s);
 var nav=E.map(function(x){return '<a href="'+B+x[1]+'&tfc_div=:::">'+x[0]+'</a>'}).join('');
 var d=document.createElement('div');d.className='mt-fg';
 d.innerHTML='<div class="lg"><img src="'+LOGO+'" alt="Muscle Tribe"></div>'
 +'<div class="contacts">'
  +'<div class="crow"><img src="'+ICON_VK+'" alt=""><a href="https://vk.com/muscletribe">Мы ВКонтакте</a></div>'
  +'<div class="crow"><img src="'+ICON_TEL+'" alt=""><span><a href="tel:+79099993635">+7 (909) 999-36-35</a><span class="sub">Ежедневно с 10:00 до 19:00</span></span></div>'
  +'<div class="crow"><img src="'+ICON_MAIL+'" alt=""><a href="mailto:vera.gnezdilova.86@mail.ru">vera.gnezdilova.86@mail.ru</a></div>'
  +'<div class="navsep">'+nav+'</div>'
 +'</div>'
 +'<div class="legal"><a href="/privacy">Политика в отношении обработки персональных данных</a><a href="/agreement">Согласие на обработку персональных данных</a><a href="/cookie">Соглашение об использовании файлов cookie</a></div>';
 f.appendChild(d);
 var tc=document.querySelector('[id^=tildacop]');if(tc)tc.style.setProperty('display','none','important');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
setInterval(build,1200);
})();
