//Proxy ES6 构造函数
//defineProperty  劫持数据 -> 给对象进行扩展 ->属性进行设置

// var obj={
//   a:1,
//   b:2
// }

//defineProperty(obj,"属性名",{}) //是给对象设置属性，如果属性本身就存在的话 就不需要进行设置，所以defineProperty是往里面增加东西

//Proxy是本身就有一个对象target{ a: 1, b: 2 },通过处理这个对象来达到目的，所以proxy没有属性名这个参数，proxy不管你增不增加属性，是管理怎么处理这个属性

function Proxy() {}

var proxy = new Proxy(obj); //不是数据劫持  是返回一个代理对象

var target = { a: 1, b: 2 };
let obj = new Proxy(target, handler);
//target  目标对象  你要进行处理的对象
//handler  容器  数据可以处理对象属性的方法

//自定义对象属性的获取，赋值，枚举，函数调用的等功能
