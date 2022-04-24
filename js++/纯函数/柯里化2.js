//柯里化：函数式编程的思想

// function test(a, b, c) {
//   return a + b + c;
// }

// test(1, 2, 3);

//柯里化：知道参数传完了才执行

// test(1, 2)(3);
// test(1)(2, 3);
// console.log(test(1)(2)(3));

// 写个方法让上面三个都能执行最开始的test方法;

//concat合并数组

// 柯里化：1.简化代码
// 2.提高维护性
// 3.功能单一化

// 功能内聚
// 降低耦合
// 降低代码的重复性
// 提高代码的适应性

// // Haskell Brollks Curry
// // Haskell:纯函数
// 一个函数有固定参数  4个
// function add(a,b,c,d){
//   return a+b+c+d;
// }
// add(1,2,3,4)
// var add2=curry(add,1)
// console.log(add2(2,3,4))

var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

var arr = [].slice.call(obj, 1);

function add(a, b, c, d) {
  return a + b + c + d;
}

function curry1(fn) {
  var _arg = [].slice.call(arguments, 1);
  console.log(_arg);

  return function () {
    var newArg = _arg.concat([].slice.call(arguments));
    return fn.apply(this, newArg);
  };
}

var add2 = curry1(add);
var res = add2(1, 2, 3, 4);
console.log(res);

function curry(fn) {
  var len = fn.length; //fn.length就能求得fn有多少个形参

  //参数没凑齐就要返回函数
  return function () {
    var _args = [].slice.call(arguments);
  };
}
