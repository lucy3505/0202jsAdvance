function Test() {
  this.oBtn = document.getElementById("btn");
  this.a = 0;
  this.init();
}
Test.prototype.init = function () {
  this.bindEvent();
};
Test.prototype.bindEvent = function () {
  this.oBtn.addEventListener("click", this.btnClick.bind(this));
};

Test.prototype.btnClick = function () {
  this.a++;
  console.log(this.a);
};
new Test();

// call/apply  改变this指向  并且立即执行
// 写法不算区别
// call(context,原函数的参数们依次排列)
// apply(context 原函数的参数集合  用数组装载)

//! bind  改变this指向 并返回一个新函数
写法同call;
