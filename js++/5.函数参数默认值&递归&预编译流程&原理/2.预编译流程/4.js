function test(a) {
  console.log(a); //function a(){}
  var a = 1;
  console.log(a);
  //1;
  function a() {}
  console.log(a);
  1;
  var b = function () {};
  console.log(b); //function b
  function d() {}
}
test(2);

//ao
//活跃对象，函数上下文
// 1)  寻找变量声明
//   ao={
//     a:undefined,
//     b:undefined,
//   }
// 2)赋值形参
// ao={
//   a:2
//   b:undefined,
// }
// 3)寻找函数声明
// ao={
//   a:function(){}
//   b:undefined,
//   d:function(){}
// }
// 4)执行代码
// ao={
//   a:function(){}
//   b:undefined,
// }

//1.寻找形参和变量声明，2赋值形参，3，寻找函数声明
