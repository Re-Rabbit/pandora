'use strict';

$('#trigger').on('click', function (evt) {
    $('#aside').addClass('active');
    $('body').addClass('sidebar-fixed');
    $(window).scrollTop(0);
    requestAnimationFrame(function () {
        $('.sidebar__bg, .sidebar__main').addClass('active');
    }, 100);
});

$('.sidebar__bg').on('click', function (evt) {
    $('.sidebar__bg, .sidebar__main').removeClass('active');
    setTimeout(function () {
        $('#aside').removeClass('active');
        $('body').removeClass('sidebar-fixed');
    }, 210);
});

$('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    items: 1,
    autoplay: true
});