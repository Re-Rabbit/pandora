let pre1 = new Preview({ el: $('.js-upload') }).show()

$('.js-label').on('click', evt => {
    $('.js-label').removeClass('active')
    $(evt.target).addClass('active')
})

new Counter({ el: $('.js-counter') })
