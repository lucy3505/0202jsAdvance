//包装类
//原始值没有自己得方法和属性
//用new 实例化出来得都是对象
var a = 1; //原始值  数字是不是就一定是原始值
var c = 3;
var e = new Object();
var aa = new Number(); //aa={0}
var b = new Number(1); //说明b经过new Number以后就实例化了一个对象
b.len = 1;
b.add = function () {
  console.log(1);
};
console.log(b);
var d = b + 1; //一个对象加上数字也能参与运算
var e2 = e + 1; //一个对象加上数字也能参与运算
var aa2 = aa + 1; //参与运算用得是原始值去运算
console.log(d); //2
console.log(b);
console.log(aa);
console.log(aa2); //1
console.log(e2); //[Object][Object]1
//new Number, new String, new Boolean都是一样得
