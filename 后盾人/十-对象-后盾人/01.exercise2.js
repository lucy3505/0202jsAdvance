//27.使用访问器伪造属性

// let lesson = {
//   lists: [
//     { name: 'js', price: 100 },
//     { name: 'node', price: 200 },
//     { name: 'vuejs', price: 300 },
//   ]
// }

//? 给这课程加一个价格汇总lists  total的属性

// function add(c, v) {
//   debugger
//   return function () {
//     c + v.price
//   }
// }

let lesson = {
  lists: [
    { name: 'js', price: 100 },
    { name: 'node', price: 200 },
    { name: 'vuejs', price: 300 },
  ],
  // get total() {
  //   return this.lists.reduce((c, v) => c + v.price, 0)
  // }
  add() {
    return function (c, v) {
      return c + v.price
    }
  },
  add1(c, v) {
    return c + v.price
  },
  get total() {
    // return this.lists.reduce(this.add(), 0)
    return this.lists.reduce(this.add1, 0)
  }
}

console.log(lesson.total)