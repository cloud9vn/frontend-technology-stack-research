jQuery(document).ready(function ($) {

    $('.collapse-header').click(function (e) {
        var number = $(this).data('number');    // lay number ra, number de lien ket giua header va content, cho biet header nao dong/mo content nao

        // neu dang active: bo active, dong content
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.collapse-content[data-number="' + number + '"]').hide();
        } else {  // neu khong active: them active, mo content
            $(this).addClass('active');
            $('.collapse-content[data-number="' + number + '"]').show();
        }
    });

});