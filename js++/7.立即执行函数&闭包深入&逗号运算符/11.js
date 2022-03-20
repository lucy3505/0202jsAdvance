// 写一个累加器  没执行一次函数就+1

var a = (function acc() {
  var n = 0;
  return function () {
    console.log(n);
    n += 1;
  };
})();
a();
a();
