let $phone = $('[name=phone]')
let $code = $('[name=code]')
let $phone1 = $('[name=phone1]')
let $pwd  = $('[name=pwd]')

const beforeCheck = _ => {
    if($phone.val()) return true
    alert('还没有填写手机号')
    return false
}


$('.js-tab-title').on('click', function() {
    let idx = $(this).index('.js-tab-title')
    $('.js-tab-title')
        .removeClass('text-primary')
        .eq(idx).addClass('text-primary')
    $('.js-tab-content')
        .hide()
        .eq(idx).show()
}).first().click()

new Msgcode({ el: $('#msg'), onBeforeSend: beforeCheck })

$('.js-ok').on('click', _ => {
    let [v1, v2, v3] = [$phone, $code, $pwd].map(n => n.val())
    if(!v1) {
        alert('请填写手机号')
        return
    }
    if(!v2) {
        alert('请填写短信验证码')
        return
    }

    alert(`${v1}, ${v2}`)
})
