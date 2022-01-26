$(document).ready(function () {
  /* CUSTOM SCROLLBARS */
  $('.projects').each(function () {
    $(this).overlayScrollbars({
      className: 'os-theme-dark',
      resize: 'none',
      sizeAutoCapable: false,
      nativeScrollbarsOverlaid: {
        showNativeScrollbars: false,
        initialize: true,
      },
      overflowBehavior: {
        y: 'scroll',
        x: 'hidden',
      },
      scrollbars: {
        visibility: 'auto',
        autoHide: 'never',
        dragScrolling: true,
        clickScrolling: false,
        touchSupport: true,
        snapHandle: false,
      },
    });
  });

  /* HEADER SECTION BLOCKS APPEARANCE */
  (function toggleUnToggleActiveClass() {
    var burgerWrapper = $('.header-burger__wrapper');
    var headerBtnWrapper = $('.header-btn__wrapper');
    var deskLanguagepicker = $('.desktop-languagepicker');
    burgerWrapper.on('click', function (e) {
      $(this).toggleClass('active-dropdown');
    });
    headerBtnWrapper.on('click', function (e) {
      $(this).toggleClass('active-dropdown');
    });
    deskLanguagepicker.on('click', function (e) {
      $(this).toggleClass('active-dropdown');
    });
  })();

  (function onClickOutsideHideElement() {
    $(document).on('mouseup', function (e) {
      var elem = $('.header-burger__wrapper');
      if (!elem.is(e.target) && elem.has(e.target).length === 0) {
        elem.removeClass('active-dropdown');
      }
    });
    $(document).on('mouseup', function (e) {
      var elem = $('.header-btn__wrapper');
      if (!elem.is(e.target) && elem.has(e.target).length === 0) {
        elem.removeClass('active-dropdown');
      }
    });
    $(document).on('mouseup', function (e) {
      var elem = $('.desktop-languagepicker');
      if (!elem.is(e.target) && elem.has(e.target).length === 0) {
        elem.removeClass('active-dropdown');
      }
    });
  })();

  /*SET IFRAMES WRAPPER*/
  $('iframe').each(function () {
    $(this).parent().addClass('iframe-wrapper');
  });
});


