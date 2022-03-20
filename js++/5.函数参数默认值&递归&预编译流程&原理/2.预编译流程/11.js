function test() {
  console.log(b); //undefined
  if (a) {
    var b = 2;
  }
  c = 3;
  console.log(c); //3
}

var a;
test();
a = 1;
console.log(a); //1

// go={
//   a:undefined,
//   test:function,
//   c:undefined
// }

// ao={
//   b:undefined //只看声明  不看变量,预编译的时候只看变量，不看执行，if什么的要等执行再去看
// }
