
function User() {
  // this.show = function(){  // }//这个是存在于对象上的函数，如果new的话,建议的是放原型上
}
User.prototype.show = function () { }

let hd = new User()
console.log(hd)

let hd2 = new User()

//User是函数也是个对象
User.show = function () { }//这时候的方法称为静态方法，定义在函数对象上，调用的时候只能用函数调



//既然函数是个对象，也可以把方法定义到函数的原型上
User.__proto__.show = function () {
  console.log("static show")
}

//?这时候能否使用this?
//当然可以，函数也是对象
User.__proto__.show = function () {
  console.log(this)//this指调用我方法的对象
  console.log(this === User)//true
  console.log(this === User.prototype.constructor)//true
  console.log("static show")
}
User.show()//*this那么指向的就是User构造函数

class User {
  //使用类，好看
  static show() { }//相当于User.show
  show() {
    console.log("protottype show")
  }
}
//不使用类
// User.__proto__.show = function(){
//   console.log('static show')
// }
// User.show()


console.log(typeof User)
let hd = new User()
console.log(hd)

//使用下面的方法创建对象的时候,就要创建一个create静态方法
// let xj = User.create('xiangjun')
console.log(xj)
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  static create(...args) {
    return new User(...args)
  }
}

let xj = User.create('xiangjun')
console.log(xj)
//如果构造名称变了，变成了Member
// class Member{...}那么里面的return new User也要改名字，这时候把new User()改成new this()

