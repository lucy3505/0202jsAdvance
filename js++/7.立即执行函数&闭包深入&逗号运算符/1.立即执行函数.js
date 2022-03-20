console.log(test);
var test;
(function test() {
  console.log(11);
})();

var test2 = (function () {
  console.log(22);
})();

// function test3(){
//   console.log(33)
// }();//报错

//!一定是表达式才能被执行符号执行
//()里面的东西就是表达式
