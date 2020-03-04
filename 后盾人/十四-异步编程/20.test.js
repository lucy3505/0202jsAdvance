
var div = document.querySelector('div')


// function interval(delay) {
//   var id = setInterval(() => {
//     let left = parseInt(window.getComputedStyle(div).left)
//     div.style.left = left + 10 + "px"
//     if (left > 200) {
//       clearInterval(id)
//       let id1 = setInterval(() => {
//         let width = parseInt(window.getComputedStyle(div).width)
//         div.style.width = width - 10 + 'px'
//         if (width <= 20) {
//           clearInterval(id1)
//         }
//       }, 100)
//     }


//   }, 50)
// }

// interval()
function interval(cb, delay) {
  id = setInterval(() => {
    cb(id)
  }, delay)
}
function fn(cb) {
  let el = document.querySelector('div')
  return function (id) {
    let left = parseInt(window.getComputedStyle(el).left)
    el.style.left = left + 10 + "px"
    if (left > 200) {
      clearInterval(id)

      // interval(fn2, 100)
      interval(fn3(el), 100)

      // function fn2(id) {
      //   let width = parseInt(window.getComputedStyle(el).width)
      //   el.style.width = width - 10 + 'px'
      //   if (width <= 20) {
      //     clearInterval(id)
      //   }
      // }
    }
  }
}
interval(fn(), 50)

function fn3(el) {
  return function (id) {
    let width = parseInt(window.getComputedStyle(el).width)
    el.style.width = width - 10 + 'px'
    if (width <= 20) {
      clearInterval(id)
    }
  }

}