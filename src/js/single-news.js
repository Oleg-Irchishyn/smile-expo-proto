import './components/libs/slick-carousel/slick/slick.min';

$(function () {
    (function initSingleNewsSliders() {
        let $newsSliderWrapper = $('.single-news-list__slider-wrapper');
        let $newsSlider = $('.single-news-list__slider');
        let $newsSliderLength = $newsSlider.find('.item').length;
        if ($newsSliderLength >= 3) {
            $newsSlider.slick({
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
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
                            slidesToShow: 1,
                            slidesToScroll: 1,
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