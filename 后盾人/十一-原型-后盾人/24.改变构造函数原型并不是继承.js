//*改变构造函数原型并不是继承
//*原型的继承，并不是改变构造函数的原型
//!直接改变构造函数的原型是不对的，这不是继承
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
Admin.prototype = User.prototype //改变了构造函数的原型
let a = new Admin()//a的__proto__就指向了User.prototype
a.name()//'user name'
function Member() {

}
Member.prototype = User.prototype
//这是后User，Member,Admin都使用了User.prototype这个原型
//``这时候Admin 有一个获取角色的方法
Admin.prototype.role = function () {
  console.log('role')
}
//这时候Member也有一个获取role的方法
Member.prototype.role = function () {
  console.log('member role')
  //! 这时候Admin的role方法就会被覆盖掉，这显然是错误的

}

//所以构造函数本身的prototype应该是要保留的，否则没法给构造函数本身加动作