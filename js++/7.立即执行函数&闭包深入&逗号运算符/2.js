var test = function () {
  console.log(1);
};

console.log(test); //1

var test1 = (function () {
  console.log(2);
})(); //立即执行函数  执行完就销毁

console.log(test1); //undefined
