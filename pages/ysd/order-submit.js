let invoice = new Switch({ el: $('.js-invoice'), checked: false })
let person = new Switch({ el: $('.js-person'), checked: true })
let org = new Switch({ el: $('.js-org'), checked: false })
let orgc = new Validator({ el: $('[name=orgc]') })

let $next1 = $('.js-next-1').hide()
let $next2 = $('.js-next-2').hide()

const nobd = sw => sw.$el.parents('.list-control').toggleClass('nobd')

invoice.changed(checked => {
    checked ? $next1.show() : $next1.hide()
    nobd(invoice)
})

person.changed(checked => {
    org.setVal(!checked)
    !checked ? $next2.show() : $next2.hide()
    nobd(person)
})

org.changed(checked => {
    person.setVal(!checked)
    checked ? $next2.show() : $next2.hide()
    nobd(person)
})

$('.js-submit').on('click', _ => {
    if(invoice.getVal() && org.getVal() && !orgc.validate()) {
	alert('还没有填写公司名称')
	return
    }
})
