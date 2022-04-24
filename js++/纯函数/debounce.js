var debounce = function (fn, time, triggerNow) {
  var t = null;

  return function () {
    var _self = this,
      res;
    if (t) {
      clearTimeout(t);
    }
    if (triggerNow) {
      var exec = !t;
      // console.log(t, exec);
      t = setTimeout(function () {
        t = null;
      }, time);
      if (exec) {
        res = fn.apply(_self, arguments);
      }
    } else {
      t = setTimeout(fn, time);
    }
    debounce.remove = function () {
      clearTimeout(t);
      t = null;
    };
  };
};

//1.是否首次延迟执行
//2.n秒之内  触发事件不执行使劲处理函数(n秒之内频繁触发事件) 计时器会频繁重新开始计时)
