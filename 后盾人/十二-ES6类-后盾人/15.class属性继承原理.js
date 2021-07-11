// function User(name) { this.name = name }
// function Admin(name) {
//   User.call(this, name)//*Admin继承User里的属性
// }
// //Admin继承User
// Admin.prototype = Object.create(User.prototype)
// let hd = new Admin('houdun')
// console.log(hd)


//用类的方式继承父类属性
class User {
  name2="user"
  constructor(name) {
    this.name = name
  }
}



class Admin extends User{
  constructor(age){
    super(age)
    this.age=age
  }
}

let a = new Admin(22)
console.log(a)