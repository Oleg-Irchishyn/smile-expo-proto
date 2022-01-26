import './components/libs/slick-carousel/slick/slick.min';

$(function () {
    (function initPartnersPageSliders() {
        let $partnersListSlider = $('.our-partners-list');
        let $partnersListSliderLength = $partnersListSlider.find('.item').length;

        if ($partnersListSliderLength >= 9) {
            $partnersListSlider.slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                rows: 2,
                dots: true,
                arrows: true,
                nextArrow: $('.our-partners-list-next-arrow'),
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
            $('.our-partners-list-wrapper').addClass('unslicked');
        }
    })();
});