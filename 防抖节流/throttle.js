
// 节流的原理很简单：

// 如果你持续触发事件，每隔一段时间，只执行一次事件。

// 根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
// 我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。

// 关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。

//用时间戳方式
function throttle(fn, wait) {
  if (!wait) wait = 1000
  previous = 0

  return function () {
    var nowDate = +new Date()
    if (nowDate - previous > wait) {
      fn.apply(this, args)
    }
    previous = nowDate
  }
}

// 、、使用定时器
// 接下来，我们讲讲第二种实现方式，使用定时器。

// 当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。

function throttle1() {
  var timer
  return function () {
    if (!timer) fn.apply(this, args)
    timer = setTimeout(() => {

      clearTimeout(timer)
      timer = null
    }, wait)
  }

}



// function f1() {


//   var a = 1
//   function f2() {
//     a = 2
//   }
//   f2()
//   console.log(a)
// }
// f1()