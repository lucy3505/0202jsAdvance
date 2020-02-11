function User(name) { this.name = name }
function Admin(name) {
  User.call(this, name)//*Admin继承User里的属性
}
//Admin继承User
Admin.prototype = Object.create(User.prototype)
let hd = new Admin('houdun')
console.log(hd)


//用类的方式继承父类属性
class User {
  constructor(name) {
    this.name = name
  }
}

class Admin {
  constructor(name) {
    super(name)
  }
}