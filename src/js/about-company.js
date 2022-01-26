import './components/libs/slick-carousel/slick/slick.min';

$(function () {
    /* IFRAME TOGGLING EVENT */
    let iframeWrapper = $(".hero-screen-content .video");
    iframeWrapper.each(function () {
        let playIcon = $(this).find('.play');
        let iframe = $(this).find('iframe');
        let iframeContainer = $(this).find('.iframe-wrapper');
        playIcon.on('click', function (ev) {
            $(this).remove();
            iframeContainer.removeClass('transparent');
            iframe[0].src += "?autoplay=1";
            ev.preventDefault();
        });
    });

    /* MOUSE ONCLICK SCROLL EVENT */
    $('#mouse').on('click', function () {
        $('html, body').animate(
            {
                scrollTop: $('#key-areas').offset().top,
            },
            500,
        );
    });

  /* ABOUT COMPANY SLIDERS */
    (function initAboutCompanySliders() {
        let $historyNumbersSlider = $('.history-numbers-slider');
        $historyNumbersSlider.slick({
            infinite: true,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            pauseOnFocus: true,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: 'unslick',
                },
                {
                    breakpoint: 1919,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 767,
                    settings: 'unslick',
                },
            ],
        });

        let $ourAchievementsListSlider = $('.our-achievements-list');
        let $ourAchievementsListSliderLength = $ourAchievementsListSlider.find('.item').length;
        if ($ourAchievementsListSliderLength >= 4) {
            $ourAchievementsListSlider.slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: Math.ceil($ourAchievementsListSliderLength / 2),
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 10000,
                pauseOnHover: true,
                pauseOnFocus: true,
                responsive: [
                    {
                        breakpoint: 1919,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 767,
                            settings: 'unslick',
                    },
                ],
            });
            $('.unslicked').removeClass('unslicked');
            $('.unslicked-item').removeClass('unslicked-item');
        } else {
            $ourAchievementsListSlider.find('.item').addClass('unslicked-item');
            $('.our-achievements-list__wrapper').addClass('unslicked');
        }
    })();

     /* HISTORY NUMBERS COUNTDOWN */
     (function initHistoryNumbersCounter() {
        var a = 0;
        $(window).on('scroll', function () {
            var oTop = $('.history-numbers-slider').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.history-numbers-slider__value .number').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text(),
                    }).animate(
                        {
                            countNum: countTo,
                        },
                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            },
                        },
                    );
                });
                a = 1;
            }
        });
    })();
});