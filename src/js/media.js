import './components/libs/slick-carousel/slick/slick.min';

$(function () {
    (function initMediaPageNewsSlider() {
        let $eventsNewsListSlider = $('.events-news__list');
        let $eventsNewsListSliderLength = $eventsNewsListSlider.find('.item').length;
        if ($eventsNewsListSliderLength >= 3) {
            $eventsNewsListSlider.slick({
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 2,
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
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
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
            $eventsNewsListSlider.find('.item').addClass('unslicked-item');
            $('.events-news__list-wrapper').addClass('unslicked');
        }
    })();
});
/* MEDIA PAGE VIDEO IFRAME SLIDER */
(function initMediaPageVideoSlider() {
    let $mediaListSlider = $('.about-us-in-media__list');
    let $mediaListSliderLength = $mediaListSlider.find('.item').length;
    if ($mediaListSliderLength >= 7) {
        $mediaListSlider.slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 2,
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
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
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
        $mediaListSlider.find('.item').addClass('unslicked-item');
        $('.about-us-in-media__list-wrapper').addClass('unslicked');
    }

    /* IFAME VIDEO PLACEHOLDER TOGGLING*/
    let iframeWrapper = $(".about-us-in-media__list .item .item-video");
    iframeWrapper.each(function (index) {
        let playIcon = $(this).find('.play');
        let iframe = $(this).find('iframe');
        playIcon.on('click', function (ev) {
            $(this).closest('.placeholder').remove();
            iframe[0].src += "?autoplay=1";
            ev.preventDefault();
        });
    });
})();
