let username = new Validator({ el: $('[name=name]') })
let phone = new Validator({ el: $('[name=phone]'), regex: /^1\d{10}$/ })
let city = new Validator({ el: $('[name=city]') })
let area = new Area({ el: $('[name=addr]') })

$('.js-ok').on('click', _ => {
    if(!username.validate()) {
        alert('请填写收货人姓名')
        return
    }
    if(!phone.validate()) {
        alert('请填写正确的手机号')
        return
    }
    if(!city.validate()) {
        alert('请填写省市区')
        return
    }

    if(!area.getVal()) {
	alert('请填写详细地址')
        return
    }

    alert([username, phone, city, area].map(n => n.getVal()).join(','))
})
