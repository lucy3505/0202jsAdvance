普通对象就两代：自己和自己.__proto__


原型：自己.__proto__

没有原型得对象（只有自己这一代）：
    Object.create(null,{name:{value:'xyy'}})


对象总结：对象有一个属性来记录自己原型或者说父亲，__proto__

函数有两个原型：__proto__和prototype
let hd = new User()
User.prototype === hd.__proto__

hd有三代：hd,  User.prototype,  User.prototype.__proto__

User.prototype只能赋值对象，系统内定得，如果赋值字符串等，会无法赋值成功

如果给User.prototype赋值了对象，那么new User()后得对象得__proto__会是User.prototype这个对象，如果没有给User.prototype对象赋值得话，默认User.prototype是{constructor:User,__proto__:Object}//默认带有constructor，但如果把prototype改了就没有constructor了，手动加上：User.prototype.constructor = User

函数默认得prototype对象是有constructor和__proto__这个属性得，当把prototype这个对象改变得时候，那么这两个属性就都没有了，变成一个普通对象，而普通对象只有自带得__proto__属性，且指向Object

User函数本身得__proto__指向 Function.prototype

Object.__proto__===Function.prototype

函数得父辈都是Function.prototype
Function.prototype是个对象，这个对象得__proto__是Object.prototype

Object.__proto__===Function.prototype
Function.prototype.__proto__===Object.prototype

//!函数得prototype默认包含constructor和__proto__,__proto__默认指向Object.prototype
每个函数出生自带prototype这个对象，里面有两个属性constructor和__proto__,__proto这个对象属性得内容是Object.prototype,constructor这个对象属性得内容是函数这个对象
//!每个函数得__proto__指向得是Function.prototype
Function.prototype是个内置得对象，里面有很多方法，Function.prototype得__proto__还是Object.prototype


函数有两个原型
对象一个原型
函数得__proto__原型是Function.prototype
Function.prototype得原型是Object.prototype
Function.prototype.__proto_=Object.prototype
Object.__proto__是Function.prototype
Function.__proto__是Function.prototype

Function.__proto__===Function.prototype

__proto__肯定是某个函数得prototype

//* xx.__proto__ === YY. prototype
xx=new YY()

//instanceof 检测一个构造函数得prototype是否在另一个对象得原型链上
function B(){}
var a = new B()
a.__proto__===B.prototype //true
a instanceof B //true
//isPrototypeOf检测一个对象是否在另一个对象得原型链上
var a={}
Object.prototype.isPrototypeOf(a)

//?检测对象上是否有某一属性  in
in不仅检测对象同时这个对象得原型链也检测
obj.hasOwnProperty(property)//只检测当前对象上是否有这个属性