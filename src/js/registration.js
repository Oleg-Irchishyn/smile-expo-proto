import './components/libs/slick-carousel/slick/slick.min';

$(function () {
    (function initMainPageSliders() {
        let $ourRecentEventsListSlider = $('.our-recent-events-list');
        let $ourRecentEventsListSliderLength = $ourRecentEventsListSlider.find('.item').length;
        if ($ourRecentEventsListSliderLength >= 4) {
            $ourRecentEventsListSlider.slick({
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
            $ourRecentEventsListSlider.find('.item').addClass('unslicked-item');
            $('.our-events-list-wrapper').addClass('unslicked');
        }
    })();
});