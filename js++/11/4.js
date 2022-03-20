// undefined和null能不能使用toString方法
var num = 1;
num.toString();
// new Number(1)->toString()  包装类，原始值有包装类
var num2 = new Number(num);
console.log(num2.toString());

Number.prototype.toString.call(1); //"1"
Object.prototype.toString.call(1); //"[object Number]"
