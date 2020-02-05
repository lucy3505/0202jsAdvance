let a = {}
let b = {}
let c = {}
console.log(b.isPrototypeOf(a))//false 检测b对象是否在a对象的原型链上
//*instanceof 检测一个构造函数的prototype是否在另一个对象的原型链上
//*isPrototypeOf检测一个对象是否在另一个对象的原型链上

//目前来看a,b没有关系
console.log(Object.prototype.isPrototypeOf(a))  //true
console.log(b.__proto__.isPrototypeOf(a))  //true

Object.setPrototypeOf(b, c)
Object.setPrototypeOf(a, b)//把a对象的原型设置为b   相当于：a.__proto__=b    b.__proto__=Object.prototype
console.log(b.isPrototypeOf(a))//true
//isPrototypeOf相当于检测一个对象是否是另一个对象的父级

console.log(c.isPrototypeOf(b))  //true
console.log(c.isPrototypeOf(a))  //true