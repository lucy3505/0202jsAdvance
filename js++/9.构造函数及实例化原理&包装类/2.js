function Test(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  var d = 1;
  function f() {
    d++;
    console.log(d);
  }
  this.g = f;
  //return this 闭包
}
var test1 = new Test();
test1.g();
test1.g();
var test2 = new Test();
test2.g();
