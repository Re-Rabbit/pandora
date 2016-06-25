let $phone = $('[name=phone]')
let $code = $('[name=code]')
let $business = $('[name=business]')

const beforeCheck = _ => {
    if($phone.val()) return true
    alert('还没有填写手机号')
    return false
}

let read = new Switch({ el: $('.js-switch'), checked: true })

new Msgcode({ el: $('#msg'), onBeforeSend: beforeCheck })

$('.js-ok').on('click', _ => {
    let [v1, v2, v3] = [$phone, $code, $business].map(n => n.val())
    if(!v1) {
        alert('请填写手机号')
        return
    }
    if(!v2) {
        alert('请填写短信验证码')
        return
    }
    if(!v3) {
        alert('请填写企业或品牌企业')
        return
    }

    alert(`${v1}, ${v2}, ${v3}`)
})
