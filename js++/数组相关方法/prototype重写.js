function test() {}

test.prototype = {
  //这样写会直接把test原型上的方法都冲掉,如果人家test上面本身有方法的话
  init: function () {},
  bindEvent: function () {},
};

//所以大部分用这种写法,=>新增方法

test.prototype.init = function () {};
test.prototype.bindEvent = function () {};
