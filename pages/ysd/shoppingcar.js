let state = 1 // 1.default 2.edit

let data = [{
    id: '1',
    label: '标准产品',
    goods: [{
	id: '11',
	name: '一撕得7号箱',
	price: 200,
	spec: '100',
	count: 10,
	pic: "../images/box-12.png"
    },{
	id: '12',
	name: '一撕得8号箱',
	price: 400,
	spec: '100',
	count: 18,
	pic: "../images/box-12.png"
    }]
},{
    id: '2',
    label: '劣质产品',
    goods: [{
	id: '21',
	name: '一撕得9号箱',
	price: 200,
	spec: '100',
	count: 10,
	pic: "../images/box-12.png"
    },{
	id: '22',
	name: '一撕得10号箱',
	price: 400,
	spec: '100',
	count: 18,
	pic: "../images/box-12.png"
    }]
}]

const goodsDefaultTpl = goods => `
<div class="list-row list-pad js-goods" data-id="${goods.id}">
  <section class="list-control">
    <div class="row">
      <div class="grid width--1 card-left">
	<div class="order-radio">
          <label for="" class="radio">
	  <input name="" class="js-checked" type="checkbox" value=""/>
          </label>
	</div>
      </div>
      <div class="grid width--3 card-left">
	<div class="card-photo">
	  <section class="photo">
	    <img width="64" src="${goods.pic}" />
	  </section>
	</div>
      </div>
      <div class="grid width--4 card-right">
	<header class="muilt-line-title">
	  ${goods.name}
	</header>
	<section class="muilt-line-title text-gray text-small">
	  <span class="js-count">${goods.spec}</span><span class="">个/箱</span>
	</section>
      </div>
      <div class="grid width--4 card-right card-last">
	<section class="muilt-line-title">
	  ￥<span class="js-price">${goods.price}</span>
	</section>
	<section class="muilt-line-title">
<div class="counter js-counter" data-count="${goods.count}">
  <div class="label counter__label js-counter-dec">
    <span class="ion-ios-remove-outline"></span>
  </div>
  <div class="label counter__num ">
    <input class="counter__field field js-counter-val" type="number" value="${goods.count}" />
  </div>
  <div class="label counter__label js-counter-inc">
    <span class="ion-ios-add-outline"></span>
  </div>
</div>
	</section>
      </div>
    </div>
  </section>
</div>
`

const goodsEditTpl = goods => `
<div class="list-row list-pad js-goods" data-id="${goods.id}">
  <section class="list-control">
    <div class="row">
      <div class="grid width--1 card-left">
	<div class="order-radio">
          <label for="" class="radio">
	  <input name="" class="js-checked" type="checkbox" value=""/>
          </label>
	</div>
      </div>
      <div class="grid width--3 card-left">
	<div class="card-photo">
	  <section class="photo">
	    <img width="64" src="${goods.pic}" />
	  </section>
	</div>
      </div>
      <div class="grid width--4 card-right">
	<header class="muilt-line-title">
	  ${goods.name}
	</header>
	<section class="muilt-line-title text-gray text-small">
	  <span class="js-count">${goods.spec}</span><span class="">个/箱</span>
	</section>
      </div>
      <div class="grid width--4 card-right card-last">
	<section class="muilt-line-title">
	  ￥<span class="js-price">${goods.price}</span>
	</section>
	<section class="muilt-line-title">
<div class="counter js-counter" data-count="${goods.count}">
  <div class="label counter__label js-counter-dec">
    <span class="ion-ios-remove-outline"></span>
  </div>
  <div class="label counter__num ">
    <input class="counter__field field js-counter-val" type="number" value="${goods.count}" />
  </div>
  <div class="label counter__label js-counter-inc">
    <span class="ion-ios-add-outline"></span>
  </div>
</div>
	</section>
      </div>
    </div>
  </section>
</div>
`

const blockDefaultTpl = block => `
<div class="card js-block" data-id="${block.id}">
  <header class="card-header">
    <div class="order-header">
      <label for="" class="radio">
	<input name="" class="js-checked-all" type="checkbox" value=""/>
	<span class="text-gray">${block.label}</span>
      </label>
    </div>
  </header>
  <section class="card-middle">
  ${block.goods.map(goodsDefaultTpl).join('')}
  </section>
  <footer class="card-footer">
    <div class="order-footer">
      <div class="muilt-line-block">
	合计<span class="">￥</span><span class="text-primary js-sum">0</span>
      </div>
    </div>
  </footer>
</div>
`

const blockEditTpl = block => `
<div class="card js-block" data-id="${block.id}">
  <header class="card-header">
    <div class="order-header">
      <label for="" class="radio">
	<input name="" class="js-checked-all" type="checkbox" value=""/>
	<span class="text-gray">${block.label}</span>
      </label>
    </div>
  </header>
  <section class="card-middle">
  ${block.goods.map(goodsEditTpl).join('')}
  </section>
  <footer class="card-footer">
    <div class="order-footer">
      <div class="muilt-line-block">
	合计<span class="">￥</span><span class="text-primary js-sum">0</span>
      </div>
    </div>
  </footer>
</div>
`

function getBlock(pid) {
    let blockIdx = data.findIndex(n => n.id == pid)
    return data[blockIdx]
}

function getGoods(pid, id) {
    let blockIdx = data.findIndex(n => n.id == pid)
    let goodsIdx = getBlock(pid).goods.findIndex(n => n.id == id)
    return getBlock(pid).goods[goodsIdx]
}

function render() {
    let dom = data.map(state === 2 ? blockDefaultTpl : blockEditTpl).join('')
    $('.js-container').html(dom)
    $('.js-counter').toArray().forEach(n => {
	return new Counter({ el: $(n), val: $(n).data('count'), min: 1 })
    })
}

$('.js-container').on('changed', '.js-counter', function(_, c) {
    let id = $(this).parents('.js-goods').data('id')
    let $pid = $(this).parents('.js-block')
    let pid = $pid.data('id')
    let block = getBlock(pid)
    let goods = getGoods(pid, id)
    goods.count = c
    let sum = block.goods.reduce((acc, c) => {
	return acc + parseInt(c.price) * parseInt(c.count)
    }, 0)
    block.sum = sum
    $pid.find('.js-sum').text(sum)
    $('.js-footer').trigger('recalc')
})

$('.js-footer').on('recalc', _ => {
    $('.js-money').text(
	data.reduce((acc, c) => {
	    return acc + c.goods.reduce((a1, c1) => {
		return a1 + parseInt(c1.count) * parseInt(c1.price)
	    }, 0)
	}, 0)
    )
    $('.js-len').text(
	data.length
    )
})

$('.js-container').on('change', '.js-checked-all', function() {
    let pid = $(this).parents('.js-block').data('id')
    let ids = getBlock(pid).goods.map(n => n.id)
    $('.js-container').trigger('checked-all', [pid, ids, $(this).prop('checked')])
})

$('.js-container').on('checked-all', (_, pid, ids, isChecked) => {
    ids.forEach(n => {
	getGoods(pid, n).checked = isChecked
	$(`.js-goods[data-id=${n}]`).find('.js-checked').prop('checked', isChecked)
    })
    $('.js-container').trigger('maybe-remove')
})

$('.js-container').on('maybe-remove', _ => {
    let hasChecked = !!data.filter(n => n.goods.filter(m => !!m.checked).length).length
    $('.js-delete').toggleClass('button--color2', hasChecked)
    $('.js-footer-del').toggleClass('footer__block--right', hasChecked)
    $('.js-checked-all1').prop('checked', hasChacked)
})

$('.js-checked-all1').on('change', function() {
    let checked = $(this).prop('checked')
    $('.js-container').find('.js-checked-all').prop('checked', checked)
    $('.js-container').find('.js-checked').prop('checked', checked)
    data.forEach(n => n.goods.forEach(m => m.checked = checked))
    $('.js-container').trigger('maybe-remove')
})

$('.js-container').on('change', '.js-checked', function() {
    let id = $(this).parents('.js-goods').data('id')
    let pid = $(this).parents('.js-block').data('id')
    let block = getBlock(pid)
    getGoods(pid, id).checked = $(this).prop('checked')
    $(this).parents('.js-block').find('.js-checked-all').prop('checked', block.goods.filter(n => !!n.checked).length === block.goods.length)
    $('.js-container').trigger('maybe-remove')
})

$('.js-delete').on('click', _ => {
    data.forEach(n => {
        n.goods = n.goods.filter(m => !m.checked)
    })
    data = data.filter(n => !!n.goods.length)
    render()
    $('.js-footer').trigger('recalc')
})


function setState(stat) {
    state = stat
    $('.js-default, .js-edit').hide()

    $(stat === 1 ? '.js-default' : '.js-edit').show()

    $('.js-container').trigger('state')

    if(state === 1) {
	$('.js-btn').text('完成')
    }

    if(state === 2) {
	$('.js-btn').text('编辑全部')
    }
}

$('.js-container').on('state', _ => {
    render()
})


$('.js-btn').on('click', _ => {
    setState(state === 1 ? 2 : 1)
}).last().click()


//$('.js-counter').toArray().forEach(n => new Counter({ el: $(n) }))
