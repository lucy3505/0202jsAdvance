//如何使用父类的构造函数

function User(name, age) {
  this.age = age
  this.name = name
}
User.prototype.show = function () { }

function Admin(name, age) {
  // User(name, age) //这样的话name和age会被赋值到window
  User.call(this, name, age)
}

Admin.prototyp = Object.create(User.prototype)//Admin继承User

let xj = new Admin('xiangjun', 18)
console.log(xj)

function Member(name, age) {
  // User(name, age) //这样的话name和age会被赋值到window
  User.call(this, name, age)
}