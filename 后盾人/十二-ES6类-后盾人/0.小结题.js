//8
//?使用类函数的create创建对象
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

//15
//?传统继承，如何继承父类的属性  call
//?class方式继承父类属性？  super

//17
//?super原理