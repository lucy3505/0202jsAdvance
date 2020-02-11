//一个对象是否是另一个构造函数实现的 instanceof  子级.父级的构造函数

//``把原型对象作为主角  isPrototypeOf  父级（构造函数的prototype）.子级

let a = {

}

let b = {
  __proto__: a
}
let c = {
  __proto__: b
}
console.log(a.isPrototypeOf(b))//true
console.log(a.isPrototypeOf(c))//true
console.log(c.isPrototypeOf(b))//false

//使用class方法
class Common { }
class User extends Common { }
class Admin extends User { }
let hd = new Admin()
console.log(Admin.prototype.isPrototypeOf(hd))
console.log(Common.prototype.isPrototypeOf(hd))//这是把原型对象作为主角

console.log(hd instanceof Common)//方便一点 这是把对象作为主角