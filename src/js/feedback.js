import './components/libs/slick-carousel/slick/slick.min';

$(function () {
    (function initFeedbackPageSlider() {
        let $feedbackListSlider = $('.feedback-list');
        let $feedbackListSliderLength = $feedbackListSlider.find('.item').length;
        if ($feedbackListSliderLength >= 3) {
            $feedbackListSlider.slick({
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
            $feedbackListSlider.find('.item').addClass('unslicked-item');
            $('.feedback-list-wrapper').addClass('unslicked');
        }
    })();
});