// 防抖  5秒内的点击都不算，5秒后才执行

function debounce(cb, period, immediate) {
  var timer, flag;

  if (immediate) {
    flag = true;
  }
  return () => {
    var args = arguments;
    var context = this;
    console.log(args);
    console.log(context.a);
    clearTimeout(timer);
    if (flag) {
      cb.apply(context, arguments);
      flag = false;
    } else {
      timer = setTimeout(() => {
        cb.apply(context, arguments);
        clearTimeout(timer);
      }, period);
    }
  };
}

var obj = {
  a: 1,
  b: 2,
  fn: function (a1, b2) {
    return () => {
      console.log(this.a + this.b + a1 + b2);
    };
  },
  debounce,
};
obj.debounce(obj.fn(11, 22), 2000)();
function fn(a, b) {
  return function () {
    console.log(a + b);
  };
}
