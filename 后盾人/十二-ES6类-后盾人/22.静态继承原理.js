//静态的属性调用
function User() { }
User.site = "houdunren"
console.dir(User)//*User是函数也是对象
User.show = function () {
  console.log("User.static.method")
}
console.dir(User)

function Admin() { }
Admin.__proto__ = User
console.log(Admin)
Admin.show()

console.log(Admin.site)

//``使用class
class User {
  static site = "houdunren"
  static show() {
    console.log('User.static.method')
  }
}
class Admin extends User { }
console.dir(Admin.site)
Admin.show() //