function test() {
  var arr = [];
  //var i=0
  for (var i = 0; i < 10; i++) {
    (function (j) {
      //实际上循环变成了执行函数，这是一种常用方法
      //自执行函数，同时产生了一个作用域，使得下面的function多了一层作用域
      arr[i] = function () {
        console.log(j + "");
      };
    })(i);
  }
  return arr;
}
