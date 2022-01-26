$(function () {
    /*REMOVING COLLASPSE CLASS FROM CARD AND HIDING IT'S CONTENT*/
    $('.faq-list-cards .card').each(function () {
        let arrow = $(this).find('.arrow-up');
        let cardHeader = $(this).find('.card-header .btn');
        arrow.on('click', function () {
            $(this).closest('.collapse').removeClass('show');
            cardHeader.addClass('collapsed');
        });
    });
});