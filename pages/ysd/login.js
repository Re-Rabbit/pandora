let tab = new Tab({ el: $('.js-tab') })
let phone = new Validator({ el: $('[name=phone]'), regex: /^1\d{10}$/ })
let phone1 = new Validator({ el: $('[name=phone1]'), regex: /^1\d{10}$/ })
let code = new Validator({ el: $('[name=code]') })
let pwd = new Validator({ el: $('[name=pwd]') })

const beforeCheck = _ => {
    if(phone.getVal()) return true
    alert('还没有填写手机号')
    return false
}

new Msgcode({ el: $('#msg'), onBeforeSend: beforeCheck })

$('.js-ok').on('click', _ => {
    if(tab.getVal() === 0) {
	if(!phone.validate()) {
            alert('请填写正确的手机号')
            return
	}
	if(!code.validate()) {
            alert('请填写短信验证码')
            return
	}
    } else {
	if(!phone1.validate()) {
            alert('请填写正确的手机号')
            return
	}
	if(!pwd.validate()) {
            alert('请输入密码')
            return
	}
    }

    alert([phone, code, phone1, pwd].map(n => n.getVal()).join(','))
})
