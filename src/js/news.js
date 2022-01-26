import './components/libs/slick-carousel/slick/slick.min';

$(function () {
    (function initNewsSliders() {
        let $newsSliderWrapper = $('.news-list-slider-wrapper');
        let $newsSlider = $('.news-list-slider');
        let $newsSliderLength = $newsSlider.find('.item').length;
        if ($newsSliderLength >= 6) {
            $newsSlider.slick({
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                rows: 2,
                dots: false,
                arrows: false,
                autoplay: false,
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
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
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
            $newsSlider.find('.item').addClass('unslicked-item');
            $newsSliderWrapper.addClass('unslicked');
        }
    })();
});