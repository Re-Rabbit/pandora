let stars = $('.star').toArray().map(n => new Star({ el: $(n) }))
let unname = new Switch({ el: $('.js-switch'), checked: false })
let area = new Area({ el: $('[name=content]'), col: 3 })

const showNew = _ => $('.js-new').addClass('active')

let pre1 = new Preview({ el: $('.js-box1'), cb: showNew })
let pre2 = new Preview({ el: $('.js-box2'), cb: showNew })
let pre3 = new Preview({ el: $('.js-box3'), cb: showNew })

showNew().on('click', _ => {
    let pres = [pre1, pre2, pre3].filter(n => !n.isShow())
    pres[0].trigger()
    if(pres.length === 1) {
	$('.js-new').removeClass('active')
    }
})

