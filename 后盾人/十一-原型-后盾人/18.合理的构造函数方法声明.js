//构造函数的原型的一些细节
function User(name) {
  this.name = name
  // this.show= function(){//把方法放入原型
  //   console.log(this.name)
  // }
}
User.prototype.show = function () {
  console.log(this.name)
}
//构造函数的原型会被每个实例化对象所引用
User.prototype = {
  show() {
    console.log('show')
  },
  get() {
    console.log('get')
  },
  constructor: User
}
let lisi = new User('lisi')
let xj = new User('xiangjun')
console.log(lisi)
console.log(xj)