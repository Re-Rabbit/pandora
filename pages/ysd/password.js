let validators = ['oldpwd', 'pwd', 'repwd'].map(
    n => new Validator({ el: $(`[name=${n}]`) })
)

$('.js-ok').on('click', _ => {
    let vals = validators.map(n => n.getVal())
    let [v1, v2, v3] = vals
    let turth = vals.reduce(
        (a, c) => { return a && c },
        true
    )
    if(!turth) {
        alert('请填写表单')
        return
    }
    if(v2 !== v3) {
        alert('两次输入密码不一致')
        return
    }
    alert(`${v1}, ${v2}, ${v3}`)
})
