

/* 

有个A构造函数，A有Prototype
a=new A()

 */
//  function A(){}

//  let a = new A()


//*现在检测a这个对象的原型链(__proto__)上是否有A.prototype
console.log(a instanceof A) //true
//  *A.prototype的原型(__proto__)是Object.prototype
//?所以a这个原型上是否有Object.prototype? //ture

function A() { }
function B() { }
let b = new B()

A.prototype = b
let a = new A()
//?这个时候在a的原型链中是否有B构造函数的prototype?  //true
console.log(a instanceof B)


function A() { }
function B() { }
function C() { }
let c = new C()
B.prototype = c
let b = new B()

A.prototype = b
let a = new A()
console.log(a instanceof C) //true
console.log(a instanceof A)  //true
console.log(b instanceof A)  //false
//*我想看某个对象的原型链上是否有另一个构造函数的prototype 来检测，是否能继承这个构造函数的特性，就可以用instanceof来检测