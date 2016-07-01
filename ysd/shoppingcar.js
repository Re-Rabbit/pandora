'use strict';

var state = 1; // 1.default 2.edit

var data = [{
  id: '1',
  label: '标准产品',
  goods: [{
    id: '11',
    name: '一撕得7号箱',
    price: 200,
    spec: '100',
    count: 10,
    pic: "../images/box-12.png"
  }, {
    id: '12',
    name: '一撕得8号箱',
    price: 400,
    spec: '100',
    count: 18,
    pic: "../images/box-12.png"
  }]
}, {
  id: '2',
  label: '劣质产品',
  goods: [{
    id: '21',
    name: '一撕得9号箱',
    price: 200,
    spec: '100',
    count: 10,
    pic: "../images/box-12.png"
  }, {
    id: '22',
    name: '一撕得10号箱',
    price: 400,
    spec: '100',
    count: 18,
    pic: "../images/box-12.png"
  }]
}];

var goodsDefaultTpl = function goodsDefaultTpl(goods) {
  return '\n<div class="list-row list-pad js-goods" data-id="' + goods.id + '">\n  <section class="list-control">\n    <div class="row">\n      <div class="grid width--3 card-left">\n\t<div class="card-photo">\n\t  <section class="photo">\n\t    <img width="64" src="' + goods.pic + '" />\n\t  </section>\n\t</div>\n      </div>\n      <div class="grid width--5 card-right">\n\t<header class="muilt-line-title">\n\t  ' + goods.name + '\n\t</header>\n\t<section class="muilt-line-title text-gray text-small">\n\t  <span class="js-count">' + goods.spec + '</span><span class="">个/箱</span>\n\t</section>\n      </div>\n      <div class="grid width--4 card-right card-last">\n\t<section class="muilt-line-title">\n\t  ￥<span class="js-price">' + goods.price + '</span>\n\t</section>\n\t<section class="muilt-line-title">\n<div class="counter js-counter" data-count="' + goods.count + '">\n  <div class="label counter__label js-counter-dec">\n    <span class="ion-ios-remove-outline"></span>\n  </div>\n  <div class="label counter__num ">\n    <input class="counter__field field js-counter-val" type="number" value="' + goods.count + '" />\n  </div>\n  <div class="label counter__label js-counter-inc">\n    <span class="ion-ios-add-outline"></span>\n  </div>\n</div>\n\t</section>\n      </div>\n    </div>\n  </section>\n</div>\n';
};

var goodsEditTpl = function goodsEditTpl(goods) {
  return '\n<div class="list-row list-pad js-goods" data-id="' + goods.id + '">\n  <section class="list-control">\n    <div class="row">\n      <div class="grid width--1 card-left">\n\t<div class="order-radio">\n          <label for="" class="radio">\n\t  <input name="" class="js-checked" type="checkbox" value=""/>\n          </label>\n\t</div>\n      </div>\n      <div class="grid width--3 card-left">\n\t<div class="card-photo">\n\t  <section class="photo">\n\t    <img width="64" src="' + goods.pic + '" />\n\t  </section>\n\t</div>\n      </div>\n      <div class="grid width--4 card-right">\n\t<header class="muilt-line-title">\n\t  ' + goods.name + '\n\t</header>\n\t<section class="muilt-line-title text-gray text-small">\n\t  <span class="js-count">' + goods.spec + '</span><span class="">个/箱</span>\n\t</section>\n      </div>\n      <div class="grid width--4 card-right card-last">\n\t<section class="muilt-line-title">\n\t  ￥<span class="js-price">' + goods.price + '</span>\n\t</section>\n\t<section class="muilt-line-title">\n<div class="counter js-counter" data-count="' + goods.count + '">\n  <div class="label counter__label js-counter-dec">\n    <span class="ion-ios-remove-outline"></span>\n  </div>\n  <div class="label counter__num ">\n    <input class="counter__field field js-counter-val" type="number" value="' + goods.count + '" />\n  </div>\n  <div class="label counter__label js-counter-inc">\n    <span class="ion-ios-add-outline"></span>\n  </div>\n</div>\n\t</section>\n      </div>\n    </div>\n  </section>\n</div>\n';
};

var blockDefaultTpl = function blockDefaultTpl(block) {
  return '\n<div class="card js-block" data-id="' + block.id + '">\n  <header class="card-header">\n    <div class="order-header">\n      <span class="text-gray">' + block.label + '</span>\n    </div>\n  </header>\n  <section class="card-middle">\n  ' + block.goods.map(goodsDefaultTpl).join('') + '\n  </section>\n  <footer class="card-footer">\n    <div class="order-footer">\n      <div class="muilt-line-block">\n\t合计<span class="">￥</span><span class="text-primary js-sum">0</span>\n      </div>\n    </div>\n  </footer>\n</div>\n';
};

var blockEditTpl = function blockEditTpl(block) {
  return '\n<div class="card js-block" data-id="' + block.id + '">\n  <header class="card-header">\n    <div class="order-header">\n      <label for="" class="radio">\n\t<input name="" class="js-checked-all" type="checkbox" value=""/>\n\t<span class="text-gray">' + block.label + '</span>\n      </label>\n    </div>\n  </header>\n  <section class="card-middle">\n  ' + block.goods.map(goodsEditTpl).join('') + '\n  </section>\n  <footer class="card-footer">\n    <div class="order-footer">\n      <div class="muilt-line-block">\n\t合计<span class="">￥</span><span class="text-primary js-sum">0</span>\n      </div>\n    </div>\n  </footer>\n</div>\n';
};

function getBlock(pid) {
  var blockIdx = data.findIndex(function (n) {
    return n.id == pid;
  });
  return data[blockIdx];
}

function getGoods(pid, id) {
  var blockIdx = data.findIndex(function (n) {
    return n.id == pid;
  });
  var goodsIdx = getBlock(pid).goods.findIndex(function (n) {
    return n.id == id;
  });
  return getBlock(pid).goods[goodsIdx];
}

function render() {
  var dom = data.map(state === 2 ? blockDefaultTpl : blockEditTpl).join('');
  $('.js-container').html(dom);
  $('.js-counter').toArray().forEach(function (n) {
    return new Counter({ el: $(n), val: $(n).data('count') });
  });
}

$('.js-container').on('changed', '.js-counter', function (_, c) {
  var id = $(this).parents('.js-goods').data('id');
  var $pid = $(this).parents('.js-block');
  var pid = $pid.data('id');
  var block = getBlock(pid);
  var goods = getGoods(pid, id);
  goods.count = c;
  var sum = block.goods.reduce(function (acc, c) {
    return acc + parseInt(c.price) * parseInt(c.count);
  }, 0);
  block.sum = sum;
  $pid.find('.js-sum').text(sum);
  $('.js-footer').trigger('recalc');
});

$('.js-footer').on('recalc', function (_) {
  $('.js-money').text(data.reduce(function (acc, c) {
    return acc + c.goods.reduce(function (a1, c1) {
      return a1 + parseInt(c1.count) * parseInt(c1.price);
    }, 0);
  }, 0));
  $('.js-len').text(data.length);
});

$('.js-container').on('change', '.js-checked-all', function () {
  var pid = $(this).parents('.js-block').data('id');
  var ids = getBlock(pid).goods.map(function (n) {
    return n.id;
  });
  $('.js-container').trigger('checked-all', [pid, ids, $(this).prop('checked')]);
});

$('.js-container').on('checked-all', function (_, pid, ids, isChecked) {
  ids.forEach(function (n) {
    getGoods(pid, n).checked = isChecked;
    $('.js-goods[data-id=' + n + ']').find('.js-checked').prop('checked', isChecked);
  });
  $('.js-container').trigger('maybe-remove');
});

$('.js-container').on('maybe-remove', function (_) {
  var hasChecked = data.filter(function (n) {
    return n.goods.filter(function (m) {
      return !!m.checked;
    }).length;
  }).length;
  $('.js-delete').toggleClass('button--color2', hasChecked);
  $('.js-footer-del').toggleClass('footer__block--right', hasChecked);
});

$('.js-checked-all1').on('change', function () {
  var checked = $(this).prop('checked');
  $('.js-container').find('.js-checked-all').prop('checked', checked);
  $('.js-container').find('.js-checked').prop('checked', checked);
  data.forEach(function (n) {
    return n.goods.forEach(function (m) {
      return m.checked = checked;
    });
  });
  $('.js-container').trigger('maybe-remove');
});

$('.js-container').on('change', '.js-checked', function () {
  var id = $(this).parents('.js-goods').data('id');
  var pid = $(this).parents('.js-block').data('id');
  var block = getBlock(pid);
  getGoods(pid, id).checked = $(this).prop('checked');
  $(this).parents('.js-block').find('.js-checked-all').prop('checked', block.goods.filter(function (n) {
    return !!n.checked;
  }).length === block.goods.length);
  $('.js-container').trigger('maybe-remove');
});

function setState(stat) {
  state = stat;
  $('.js-default, .js-edit').hide();

  $(stat === 1 ? '.js-default' : '.js-edit').show();

  $('.js-container').trigger('state');

  if (state === 1) {
    $('.js-btn').text('完成');
  }

  if (state === 2) {
    $('.js-btn').text('编辑全部');
  }
}

$('.js-container').on('state', function (_) {
  render();
});

$('.js-btn').on('click', function (_) {
  setState(state === 1 ? 2 : 1);
}).last().click();

//$('.js-counter').toArray().forEach(n => new Counter({ el: $(n) }))