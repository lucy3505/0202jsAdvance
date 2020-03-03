// 防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，//!那我就以新的事件的时间为准，n 秒后才执行，//!总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!
// 现在随你怎么移动，反正你移动完 1000ms 内不再触发，我才执行事件。看看使用效果：

var count = 1;
var container = document.getElementById('container');

function getUserAction() {
  container.innerHTML = count++;
};

// container.onmousemove = debounce(getUserAction)
container.onmousemove = debounce2(getUserAction, 1000, 1)
function debounce(fn, wait) {
  if (!wait) wait = 1000

  var timer
  return function () {
    var context = this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, wait)
  }
}


function debounce(fn, wait) {
  if (!wait) wait = 1000

  var timer = 1
  return function () {
    var context = this
    var args = arguments
    clearTimeout(timer)

    timer = setTimeout(function () {
      timer = null
    }, wait)
    if (!timer) fn.apply(context, args)
  }
}

// debounce(getUserAction)

function debounce1(fn, wait, immediate) {
  if (!wait) wait = 1000

  var timer
  var flag = false
  if (immediate) flag = true

  return function () {
    var context = this
    var args = arguments

    if (flag) {


      fn.apply(context, args)

      flag = false
    } else {
      clearTimeout(timer)
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, wait)
    }
  }
}

// debounce(getUserAction)

function debounce2(fn, wait, immediate) {
  if (!wait) wait = 2000

  var timer

  // if (immediate) flag = true

  return function () {
    var context = this
    var args = arguments
    if (timer) clearTimeout(timer)
    if (immediate) {
      var flag = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (flag) fn.apply(context, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, wait)
    }
  }
}