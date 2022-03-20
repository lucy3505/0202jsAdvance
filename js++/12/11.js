//打印一个参数值以内能被3或5或7整除的数
//打印斐波那契数列的第n位
//打印从0到一个数的累加值

var tools = (function () {
  function test1(num) {
    const arr = [];
    for (var i = 1; i <= num; i++) {
      if (i / 3 === 0 || i / 5 === 0 || i / 7 === 0) {
        arr.push;
      }
      return arr;
    }
  }
  function test2(n) {
    if (n <= 2) {
      return 1;
    }
    return test2(n - 2) + test2(n - 1);
  }
  function test3() {}

  return { test1, test2 };
})();
console.log(tools.test2(1));

//1+1+2+3+5+8
