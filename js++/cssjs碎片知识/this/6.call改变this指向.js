function Test1(a, b) {
  this.a = a;
  this.b = b;
  console.log(this); //Test2 { a: 1, b: 2 }  用call改变this指向
}

function Test2(a, b, c, d) {
  this.a = a;
  this.b = b;
  Test1.call(this, a, b); //
  this.c = c;
  this.d = d;
  console.log(this.a, this.b, this.c, this.d);
}

var test2 = new Test2(1, 2, 3, 4);
