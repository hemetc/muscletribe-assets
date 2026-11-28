/**
 * MT — фикс «узкой колонки» во встроенном браузере WhatsApp/Telegram (v2).
 * Причина: mt-hero-wide.js и mt-banner-carousel-v3.js задают
 *   width:100vw; margin-left:calc(50% - 50vw)
 * внутри Zero Block rec1519889921. Тильда масштабирует артборд scale(),
 * а vw в WebView считается от визуального вьюпорта → двойное сжатие.
 * Лечение: размеры в % от артборда, без vw и отрицательного margin.
 * Селекторы с двумя id перебивают стиль v3, который вставляется позже.
 */
(function () {
  if (document.getElementById('mt-banner-vw-fix-v2')) return;
  var c = document.createElement('style');
  c.id = 'mt-banner-vw-fix-v2';
  c.textContent =
    '#rec1519889921 #mt-banner-carousel{' +
      'position:absolute!important;left:0!important;right:0!important;' +
      'width:100%!important;max-width:none!important;margin-left:0!important;' +
      'transform:none!important;' +
    '}' +
    '#rec1519889921 .t396__artboard .tn-elem__15198899211762329522850{' +
      'left:0!important;right:0!important;width:100%!important;' +
      'max-width:none!important;transform:none!important;' +
    '}';
  (document.head || document.documentElement).appendChild(c);
})();
