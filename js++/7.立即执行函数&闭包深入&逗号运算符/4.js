1 &&
  (function test() {
    console.log(11);
  })();

console.log(test); //报错
//将函数声明变成表达式后，该函数就可以立即执行了，且执行后该函数名就立即被清除了
