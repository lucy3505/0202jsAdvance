function test(a, b) {
  console.log(a); //1
  c = 0;
  var c;
  a = 5;
  b = 6;
  console.log(b); //6
  function b() {}
  function d() {}
  console.log(b); //6
}

test(1);

//1,寻找形参和变量声明
//  ao={
//    a:undefined,
//    c:undefined,
//    b：undefined
//  }

//  //2形参赋值
//  ao={
//   a:1,
//   c:undefined,
//   b:undefined
//  }

//  //3.函数声明
//  ao={
//   a:1,
//   c:undefined,
//   b:function,
//   d:function,
//  }
//  //4.代码执行
//  ao={
//   a:5,
//   c:0,
//   b:6,
//   d:function,
//  }
