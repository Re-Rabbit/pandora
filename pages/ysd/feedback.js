let $content = $('[name=content]')

new Area({ el: $content })

$('.js-ok').on('click', _ => {
    let val = $content.val()
    alert(val || '请输入评价内容')
})
