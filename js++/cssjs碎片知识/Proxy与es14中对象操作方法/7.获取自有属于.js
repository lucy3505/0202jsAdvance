//4.获取自有属性[[GetOwnProperty]]

var obj = { a: 2, b: 3 };
Object.setPrototypeOf(obj, { c: 3, d: 4 }); //这个是设置在__proto__上的
console.log(Object.getOwnPropertyNames(obj)); //a,b

// obj.hasOwnProperty("a")=>true false

//5.禁止扩展对象[[PreventExtension]]
Object.preventExtensions(obj);
obj.c = 3; //禁止增加属性
console.log(obj);
delete obj.a; //可以删除属性
console.log(obj);

//6.拦截对象操作  [[DefineOwnProperty]]
Object.defineProperty();

//7.判断是否是自身属性[[HasProperty]]
console.log(obj.hasOwnProperty("a"));

//8.[[GET]]  判断这个属性是不是在Obj里面

console.log("a" in obj); //true
console.log(obj.a); //底层都是用GET实现的

//9.[[SET]]
obj.a = 3;
obj["b"] = 4;
console.log(obj);

//10[[Delete]]
delete obj.a;
console.log(obj);

//11[[Enumerate]]
for (var k in obj) {
  console.log(obj[k]);
}

//12获取键集合[[OwnPropertyKeys]]
Object.setPrototypeOf(obj, { b: 2, f: 4 });
console.log(Object.keys(obj)); //自由属性的key

//13 调用函数
function test() {}
test();

obj.test = function () {};

obj.test();
test.call / apply;
function Test() {}
new Test();
