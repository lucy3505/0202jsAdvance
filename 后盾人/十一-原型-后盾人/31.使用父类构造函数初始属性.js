//如何使用父类的构造函数

function User(name, age) {
  this.age = age
  this.name = name
}
User.prototype.show = function () {
  console.log(this.name, this.age)
}

function Admin(name, age) {//如果参数多  可以使用...args收集一下，args就变成了数组，下面就要用apply，User.apply(this,args)
  User(name, age) //这样的话name和age会被赋值到window
  User.call(this, name, age)
}

Admin.prototyp = Object.create(User.prototype)//Admin继承User

let xj = new Admin('xiangjun', 18)

function Member(...args) {
  User.apply(this, args)
}
Member.prototyp = Object.create(User.prototype)//Admin继承User

let lisi = new Member('lisi', 12)
lisi.show()

//这样就不用在每个函数里声明属性，调用上一级实现对象属性初始构建

