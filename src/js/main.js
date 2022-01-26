import './components/libs/slick-carousel/slick/slick.min';

$(function () {
    /* MAIN PAGE SLIDERS */
    (function initMainPageSliders() {
        let $achievementsCounterSlider = $('.achievements-counter');
        let $ourEventsListSlider = $('.our-events-list');
        let $ourEventsListSliderLength = $ourEventsListSlider.find('.item').length;
        let $partnersListSlider = $('.partners-list');
        let $partnersListSliderLength = $partnersListSlider.find('.item').length;

        $achievementsCounterSlider.slick({
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
        if ($ourEventsListSliderLength >= 4) {
            $ourEventsListSlider.slick({
                infinite: true,
                arrows: false,
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                adaptiveHeight: true,
                autoplay: true,
                autoplaySpeed: 10000,
                pauseOnHover: true,
                pauseOnFocus: true,
                responsive: [
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
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            });
            $('.unslicked').removeClass('unslicked');
            $('.unslicked-item').removeClass('unslicked-item');
        } else {
            $ourEventsListSlider.find('.item').addClass('unslicked-item');
            $('.our-events-list-wrapper').addClass('unslicked');
        }

        if ($partnersListSliderLength >= 9) {
            $partnersListSlider.slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                rows: 2,
                dots: true,
                arrows: true,
                nextArrow: $('.partners-list-next-arrow'),
                prevArrow: false,
                autoplay: true,
                autoplaySpeed: 10000,
                pauseOnHover: true,
                pauseOnFocus: true,
                responsive: [
                    {
                        breakpoint: 1919,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            rows: 2,
                            dots: true,
                            arrows: true,
                        },
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            rows: 2,
                            dots: true,
                            arrows: true,
                        },
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            rows: 1,
                            vertical: true,
                            verticalSwiping: true,
                            arrows: false,
                        },
                    },
                ],
            });
            $('.unslicked').removeClass('unslicked');
            $('.unslicked-item').removeClass('unslicked-item');
        } else {
            $partnersListSlider.find('.item').addClass('unslicked-item');
            $('.partners-list-wrapper').addClass('unslicked');
        }
    })();

    /* ACHIVEMENTS COUNTDOWN */
    (function initAchievementsCounter() {
        var a = 0;
        $(window).on('scroll', function () {
            var oTop = $('.achievements-counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.achievements-counter__value .number').each(function () {
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
    /* MOUSE ONCLICK SCROLL EVENT */
    $('#mouse').on('click', function () {
        $('html, body').animate(
            {
                scrollTop: $('#achievements').offset().top,
            },
            500,
        );
    });
});

/* MAIN PAGE VIDEO IFRAME SLIDER */
(function initMainPageVideoSlider() {
    let $mediaListSlider = $('.media-list');
    let $mediaListSliderLength = $mediaListSlider.find('.item').length;
    if ($mediaListSliderLength >= 4) {
        $mediaListSlider.slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('.media-list-prev-arrow'),
            nextArrow: $('.media-list-next-arrow'),
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            pauseOnFocus: true,
            responsive: [
                {
                    breakpoint: 1919,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: true,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        vertical: true,
                        verticalSwiping: true,
                        arrows: false,
                    },
                },
            ],
        });
        $('.unslicked').removeClass('unslicked');
        $('.unslicked-item').removeClass('unslicked-item');
    } else {
        $mediaListSlider.find('.item').addClass('unslicked-item');
        $('.media-list-wrapper').addClass('unslicked');
    }

    /* IFAME VIDEO PLACEHOLDER TOGGLING*/
    let iframeWrapper = $(".media-list .item .item-video");
    iframeWrapper.each(function () {
        let playIcon = $(this).find('.play');
        let iframe = $(this).find('iframe');
        playIcon.on('click', function (ev) {
            $(this).closest('.placeholder').remove();
            iframe[0].src += "?autoplay=1";
            ev.preventDefault();
        });
    });
})();

