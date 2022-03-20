//this
//函数内部的this
function test(b) {
  this.d = 3;
  var a = 1;
  function c() {}
}

test(123);
