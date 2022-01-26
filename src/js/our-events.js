import './components/libs/slick-carousel/slick/slick.min';
$(function () {
    /*CHECKBOX COUNT ELEMENT TOGGLING*/
    (function toggleActiveFilterCount() {
        $('.filters-group-checkbox').each(function (e) {
            $(this).find('label').on('click', function () {
                $(this).closest('.filters-group-checkbox').find('.count').toggleClass('active');
            });
        });
    })();

    /*FORM RESET*/
    (function resetForm() {
        $('.button-disable').each(function () {
            $(this).on('click', function () {
                $('.events-form').trigger("reset");
                $('.count').removeClass('active');
            });
        });
    })();

    /*INITIALIZING OUR EVENTS PAGE SLIDERS*/
    (function initOurEventsSliders() {
        let $eventsYearsListSlider = $('.events-years-list');
        $eventsYearsListSlider.on('init', function (event, slick) {
            var slideToShow;
            if (window.matchMedia('(max-width: 767px)').matches) {
                slideToShow = 3
            } else if (window.matchMedia('(max-width: 991px)').matches) {
                slideToShow = 2
            }
            else {
                slideToShow = 4
            }
            slick.slickGoTo(slick.slideCount - slideToShow);
            var slideTrack = $(this).find('.slick-track');
            slideTrack.find('.slick-active').removeClass('slick-active');
            slideTrack.children('.slick-slide').last().addClass('slick-active');
        });
        $eventsYearsListSlider.slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('.events-years-list-prev-arrow'),
            nextArrow: $('.events-years-list-next-arrow'),
            autoplay: false,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            pauseOnFocus: true,
            responsive: [
                {
                    breakpoint: 1919,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: true,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: true,
                    },
                },
            ],
        });

        let $eventsListSlider = $(".events-list");
        $eventsListSlider.each(function () {
            let $eventsListSliderLength = $(this).find('.item').length;
            $(this).slick({
                infinite: false,
                arrows: false,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                rows: Math.ceil($eventsListSliderLength / 3),
                adaptiveHeight: true,
                autoplay: false,
                autoplaySpeed: 10000,
                pauseOnHover: true,
                pauseOnFocus: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: 'unslick',
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            infinite: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            rows: Math.ceil($eventsListSliderLength / 2),
                        },
                    },
                    {
                        breakpoint: 767,
                        settings: 'unslick',
                    },
                ],
            });

        });
    })();
 
    /*SLICK SLIDER TABS ONCLICK FIX*/
    $('.nav-link').each(function (index) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.nav-link').removeClass('active show');
        });
    });

});
