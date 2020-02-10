
// hd.__proto__ = 99
const DATA = Symbol()
//*
// let xj = Object.create(null, {
//   name: {
//     value: 'xiangjun'
//   },
//   [DATA]: {
//     value: {
//       __proto__: { name: '__pro' }
//     }
//   },
//   get __proto__() {
//     return this[DATA].__proto__
//   },
//   set __proto__(obj) {
//     if (obj instanceof Object) {
//       this[DATA].__proto__ = obj
//     }
//   },


// }
// )
// console.log(xj) //打印出的xj是没有__proto__原型的
// xj.show()
// //给xj模拟出系统给的原型
// const DATA = Symbol()
// xj.__proto__ = {
//   [DATA]: { name: "xj" },
//   get __proto__() {
//     return this[DATA].__proto__
//   },
//   set __proto__(obj) {
//     if (obj instanceof Object) {
//       return this[DATA].__proto__ = __proto__
//     }
//   },
//   get name() {
//     return this[DATA].name = name
//   }
// }
// console.log(xj)

let xj2 = Object.create(null, {})
// xj2 = {
//   name: 'xj2',
//   get __proto__() {
//     return this[DATA].__proto__
//   },
//   set __proto__(obj) {
//     if (obj instanceof Object) {
//       this[DATA].__proto__ = obj
//     }
//   }
// }//!不能用这种方法，直接={...}  相当于又有对象原型链
xj2.name = "xj2"
xj2 = {
  // console.log(obj)
  // if (obj instanceof Object) {
  //   this.__proto__ = obj
  // }
  [DATA]: { __proto: null },
  name: 'hhh',
  // get _name() {
  //   return this._name
  // },
  set _name(v) {
    this._name = v
  },
  get __proto() {
    return this[DATA].__proto
  },
  set __proto(obj) {
    if (obj instanceof Object) {
      this[DATA].__proto = obj
    }
  }

}
console.log(xj2)
xj2.__proto = { age: 12 }
console.log(xj2)