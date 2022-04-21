// ECMA 委员会  对象操作  14种方法

var obj = { a: 1, b: 2 };

//1.获取原型 [[GetPrototypeOf]]
var proto = Object.getPrototypeOf(obj); //底层抛出来的方法  结果是和obj.__proto__一样，这样获取的好处没有，就是函数式的一种操作手法，更好扩展之类的
console.log(proto);
console.log(obj.__proto__);
console.log(Object.prototype);

//2.设置原型[[SetPrototypeOf]]  函数式比指令式好用
Object.setPrototypeOf(obj, { c: 2, d: 4 });
// obj.__proto__=
console.log(obj);
