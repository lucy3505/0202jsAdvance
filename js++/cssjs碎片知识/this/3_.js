function test(a) {
  this.a = a;
  console.log(this.a); //1 这里this.a相当于window.a
  // console.log(window.a); //1
}

// console.log(test(1).a); //报错： Cannot read properties of undefined (reading 'a')
//因为test(1)返回的是默认值undefined

function Test(a) {
  this.a = a;
  console.log(this); //=>Test { a: 1 }  只想Test实例化出来的对象
  console.log(this.a); //这里的this.a不是全局的window.a
  // console.log(window.a); //undefined
}
Test.prototype.say = function () {
  //原型上的方法 内部的this指向依然指向构造函数实例化的对象
  console.log(this.a);
};

var t = new Test(1);
console.log(t.a);
t.say(); //1
