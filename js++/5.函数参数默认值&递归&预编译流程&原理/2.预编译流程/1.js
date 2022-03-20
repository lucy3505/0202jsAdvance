// 预编译

// 1.检查通篇的语法错误
// 1.5预编译的过程
// 2.解释一行，执行一行

test();
function test() {
  console.log(1);
}

console.log(a);
var a = 1;

//! 函数声明整体提升，变量只有声明提升，赋值不提升

// var a=1;  2个步骤：1:var a   2: =1
