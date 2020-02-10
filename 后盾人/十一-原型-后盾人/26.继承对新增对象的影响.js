//继承对新创建对象的影响
function User() {
  // this.name = function(){
  //   console.log("user name")
  // }//方法要放到prototype 节约内存
}
User.prototype.name = function () {
  console.log('user name')
}

let hd = new User()
console.log(hd)

function Admin() {
  //想用name方法
}
let a = new Admin()
Admin.prototype.__proto__ = User.prototype
Admin.prototype.role = function () {
  console.log('admin role')
}
a.role()//能找到role
//