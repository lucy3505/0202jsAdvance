
const DATA = Symbol()
let hd = {
  [DATA]: { name: 'houdun' },
  get __name__() {
    return this[DATA].name
  },
  set __name__(value) {
    if (value.trim() !== "") {
      this[DATA].name = value
    }
  }

}
console.log(hd)
// hd.show()
hd.__proto__ = {
  name: "houdunren1",
  get __proto__() {
    return this.name
  }

}
console.log(hd)
// hd.__proto__ = 99

//*
// let xj = Object.create(null, {
//   name: {
//     value: 'xiangjun'
//   }
// })
// console.log(xj)