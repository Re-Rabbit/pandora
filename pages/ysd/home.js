$('#trigger').on('click', evt => {
    $('#aside').addClass('active')
    $('body').addClass('sidebar-fixed')
    $(window).scrollTop(0)
    requestAnimationFrame(() => {
	$('.sidebar__bg, .sidebar__main').addClass('active')
    }, 100)
})


$('.sidebar__bg').on('click', evt => {
    $('.sidebar__bg, .sidebar__main').removeClass('active')
    setTimeout(() => {
	$('#aside').removeClass('active')
	$('body').removeClass('sidebar-fixed')
    }, 210)
})


$('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    items: 1,
    autoplay: true
})
