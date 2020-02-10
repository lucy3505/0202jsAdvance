//方法重写  //父类方法不够可以在自己的构造函数的prototype里去定义
function User() {

}
User.prototype.show = function () {
  console.log('user show')
}
User.prototype.site = function () {
  return "houdunren"
}
function Admin() { }
Admin.prototype.__proto__ = User.prototype
console.dir(Admin)

//?如果使用Admin.prototype = Object.create(User.prototype)
//则要把constructor加上
//Admin.prototype.constructor = Admin
Admin.prototype.show = function () {
  console.log(User.prototype.site() + 'admin show')

}
let hd = new Admin()
hd.show()