import './components/libs/slick-carousel/slick/slick.min';
$(function () {
    (function initOurTeamSliders() {
        let $managersSlider = $('.our-team-slider');
        $managersSlider.each(function () {
            let $managersSliderLength = $(this).find('.item').length;
            if ($managersSliderLength >= 6) {
                $(this).slick({
                    infinite: false,
                    slidesToShow: 4,
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
                $(this).find('.item').addClass('unslicked-item');
                $(this).closest('.our-team-slider-wrapper').addClass('unslicked');
            }
        });

    })();
});