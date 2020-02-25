

// let el = document.querySelector('#app')
// console.log(el)
// for (var i = 0; i < 3; i++) {
//   var div = document.createElement('div')
//   div.innerHTML = i
//   div.setAttribute('class', 'no')
//   el.appendChild(div)
// }

// var nos = document.querySelectorAll('.no')
// console.log(nos)
// for (var index = 0; index < nos.length; index++) {
//   (function (index) {
//     nos[index].addEventListener('click', function () {
//       console.log(index)
//     })
//   })(index)

// }

// for (var index = 0; index < nos.length; index++) {
//   // (function (index) {
//   setTimeout(() => {
//     console.log(index)
//   }, 1000)
//   // })(index)

// // }

// var arr = []

// for (let i = 0; i < 3; i++) {
//   arr.push(function () { console.log(i) })

// }
// console.log(arr)
// arr[2]()

//?查找价格在10-20之间的书本
let books = [
  {
    price: 21,
    name: 'js'
  },
  {
    price: 12,
    name: 'java'
  },
  {
    price: 60,
    name: 'php'
  },
  {
    price: 50,
    name: 'c'
  },
  {
    price: 10,
    name: 'go'
  },
]

// books = books.filter((item) => item.price >= 10 && item.price < 20)
// console.log(books)
function filterArr(min, max) {
  return function (item, index) {
    return item.price >= min && item.price < max
  }
}
// books = books.filter(filterArr(20, 100))
// console.log(books)

// filter
//? Array.prototype.newFilter = function (cb) {
//   // console.log(this)
//   // console.log(typeof arguments[0])
//   // console.log(this instanceof Array)
//   if (!this instanceof Array) {
//     throw new Error('引用对象不是数组')
//   }
//   if (typeof arguments[0] !== 'function') {
//     throw new Error('第一个参数必须为函数')
//   }
//   if (this.length !== 0) {
//     let arr = []
//     for (let i = 0; i < this.length; i++) {
//       if (cb(this[i], i)) {
//         arr.push(this[i])
//       }
//     }
//     return arr
//   }
// }
// books = books.newFilter(filterArr(20, 100))
// console.log(books)

//?reduce
arr = [2, 3, 4, 1]
// total = arr.reduce((count, item) => {
//   return count + item
// })

Array.prototype.myReduce = function (cb, initValue) {
  if (this === null && !this instanceof Array) {
    throw new Error(`Array.prototype.reduce called on null or undefined`)
  }
  if (typeof cb !== 'function') {
    throw new Error(cb + 'is not a Function')
  }
  var len = this.length >>> 0
  var i = -1
  // var c=0
  // if (arguments.length >= 2) {
  // while(++i !==len){

  // }
  var total = arguments[1] || this[0]
  for (var j = arguments[1] ? 0 : 1; j < len; j++) {
    total = cb(total, this[j])

  }
  return total
  // }


}
var total = arr.myReduce((c, item) => c + item, 9)
console.log(total)







// let obj = {
//   name: '后盾人',
//   show: function () {//!这个函数属于对象属性的，所以称为方法
//     function render() {//!这个就是个普通函数
//       console.log(this)//this:window
//       console.log(this.name)//会打印出window的name
//     }
//     render.call(this)
//     console.log(this)
//     return obj.name
//   }
// };
// obj.show()