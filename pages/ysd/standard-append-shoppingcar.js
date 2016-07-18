let counter = new Counter({ el: $('.js-counter') })
let num = parseInt($('.js-num').text())

counter.$el.on('changed', _ => {
    let sum = counter.getVal() * num
    $('.js-sum').text(sum)
}).trigger('changed')

$('.main-box').height($('.main-box').height())
