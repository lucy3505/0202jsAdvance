let lesson = {
  name: 'lesson',
  list: ['js', 'node', 'java']
}
//?  要求：在lesson中写一个show方法，方法里面用map返回  调用对象的name -js'
//^ 方法一：
// lesson.show = function () {
//   let _self = this
//   return this.list.map(function (item) { return `${_self.name}-${item}` })
// }
//^方法二
// lesson.show = function () {

//   return this.list.map((item) => `${this.name}-${item}`)
// }

//^箭头函数理解：无法用call和apply绑定，使用箭头函数，this指向外部得对象
// lesson.show = () => {
//   return this.list.map((item) => `${this.name}-${item}`)
// }

// let lesson2 = {
//   name: 'lesson',
//   list: ['js', 'node', 'java'],
//   show: () => {//这里使用箭头函数那么就指向调用这个lesson2对象的对象，也就是window,所以this.list = undefined
//     return this.list.map((item) => `${this.name}-${item}`)
//   }
// }

// console.log(lesson2.show())
// console.log(lesson.show())

//? 要求，有一个按钮button,有个DOM对象，里面有个bind函数，要求DOM.bind()是个button的点击事件，button点击的时候输出DOM里面的site和button里面的innerHTML

// let DOM = {
//   site: 'hd',
//   bind(el) {
//     let button = document.querySelector(el)
//     if (!button) {
//       throw new Error('error')
//     }
//     button.addEventListener('click', () => {
//       //使用了箭头函数，里面this就只想DOM对象了，这时候还要获得button的innerHTML
//       console.log(this.site + '-' + button.innerHTML)
//     })
//   }

// }

let DOM = {
  site: 'hd',
  // event: (item, index) => {//这里用箭头函数，那么里面的this在这个就已经被绑定给外层对象window
  //   item.addEventListener('click', () => {
  //     console.log(`${this.site}-${item.innerHTML}`)
  //   })
  // },
  event: function (item) {//这里用箭头函数，那么里面的this就已经被绑定给外层对象window
    item.addEventListener('click', () => {
      console.log(`${this.site}-${item.innerHTML}`)
    })
  },
  bind(el) {
    let btns = document.querySelectorAll(el)
    if (!btns) {
      throw new Error('error')
    }
    btns.forEach(this.event)
    // btns.forEach((item) => {
    //   item.addEventListener('click', () => {
    //     console.log(`${this.site}-${item.innerHTML}`)
    //   })
    // })

  }

}

DOM.bind('button')


