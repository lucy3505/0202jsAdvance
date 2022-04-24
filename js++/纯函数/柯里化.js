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
function test() {
  var args = Array.prototype.slice.call(arguments);
  var len = args.length;

  var arr = [];
  var n = 3;
  var res = 0;
  if (len === 3) {
    args.forEach((item) => (res += item));
    return res;
  } else {
    n = n - args.length;
    arr = args;
  }
  return function child() {
    var ar = Array.prototype.slice.call(arguments);
    for (var i = 0; i < ar.length; i++) {
      if (n) {
        arr.push(ar[i]);
        n = n - 1;
      }
    }
    if (n) {
      return child;
    } else {
      arr.forEach((item) => (res += item));
      return res;
    }
  };
}
// console.log(test(1, 2, 3));
console.log(test(1)(2)(3));
console.log(test(1, 2));
console.log(test(1)(2, 3));

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
