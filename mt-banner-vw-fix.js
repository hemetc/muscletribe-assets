/**
 * MT — фикс «узкой колонки» во встроенном браузере WhatsApp/Telegram.
 * НЕ ДЕПЛОИТЬ без команды «публикуй».
 *
 * Причина: mt-hero-wide.js и mt-banner-carousel-v3.js задают
 *   width:100vw; margin-left:calc(50% - 50vw)
 * внутри Zero Block rec1519889921. Тильда масштабирует артборд
 * transform:scale(), а vw в WebView считается от визуального вьюпорта —
 * получается двойное сжатие: контент уезжает в узкую колонку слева.
 *
 * Лечение: размеры в % от артборда, без vw и без отрицательного margin.
 * Селекторы с ДВУМЯ id — перебивают стиль mt-banner-carousel-v3.js,
 * который вставляется в DOM позже (равная специфичность проиграла бы).
 */
(function () {
  if (document.getElementById('mt-banner-vw-fix')) return;
  var c = document.createElement('style');
  c.id = 'mt-banner-vw-fix';
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
