$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('header').addClass('fixedHeader');
        //$('.back-to-top').fadeIn('slow');
        // $('.fixed-buttons').css("bottom", 45);
    } else {
        $('header').removeClass('fixedHeader');
        //$('.back-to-top').fadeOut('slow');
        // $('.fixed-buttons').css("bottom", 0);
    }
});