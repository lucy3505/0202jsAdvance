//改变构造函数原型并不是继承
//原型的继承，并不是改变构造函数的原型
// 直接改变构造函数的原型是不对的，这不是继承
//!再往上走一层，在构造函数原型上再继承

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
Admin.prototype.__proto__ = User.prototype //*原型的原型继承
//*原本Admin.prototype.__proto__和User.prototype.__proto__都指向指向Object.prototype
//Admin.prototype-->Object.prototype
//*执行Admin.prototype.__proto__ = User.prototype后
//Admin.prototype-->User.prototype-->Object.prototype

function Member() {

}
Member.prototype.__proto__ = User.prototype

//``这时候Admin 有一个获取角色的方法
Admin.prototype.role = function () {
  console.log('role')
}
//这时候Member也有一个获取role的方法
Member.prototype.role = function () {
  console.log('member role')


}

//*下面这一段放下面声明也没关系，但有一种继承就有关系了
let a = new Admin()
a.name()//'user name'
//下面这种就有问题了，下面这个必须放在上面，下面这种继承相当于把__proto__换了个新对象，不再指向 原来的
//!Object.create首先会创建新的对象，然后新的对象的原型指向User.prototype
//执行下面的代码，这时候,Admin.prototype会变成{}新对象，原来里面有的方法和属性都会消失，执行完这条命令，再new新对象的话，新出来的对象就无法找到原来prototype里有的属性
Admin.prototype = Object.create(User.prototype)