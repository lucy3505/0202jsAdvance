//高阶函数：一个函数的参数带有函数,test就是高阶函数

function test(a, b, pow) {
  return pow(a, 2) + pow(b, 2);
}
function pow(x, n) {
  return Math.pow(x, n);
}

var res = test(2, 3, pow);

//js函数实际上都是指向某一个变量
var test=function(){}
function test(){}

test->一个函数
函数参数->接收变量
函数的参数能接收变量
一个函数就可以接收另一个函数作为变量

一个函数接收另一个函数作为参数变量的这个函数就是高阶函数

arr.map() 数据处理函数
reduce 归纳函数
数组的扩展方法
计时器
sort 
replace


好处:
抽象->抽象成完全独立的函数体，可以完成一个程序完成后的回调程序
相互依赖的程序体
