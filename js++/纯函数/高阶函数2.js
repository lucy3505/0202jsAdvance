// var test1 = function (a, b) {
//   return test2(a, b);
// };

var res = test1(1, 2);

function test2(a, b) {
  return a + b;
}

//test1改成下面和原来的test1有什么区别？当一个函数里面执行另外的函数，就要考虑这个函数的功能是什么？下面的test1就没有意义  test1执行的功能能仅仅是去执行test2吗，这样就没意义
var test1 = function (a, b, fn) {
  return fn(a, b);
};
var res = test1(1, 2, test2);
