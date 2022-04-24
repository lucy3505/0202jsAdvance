//函数记忆 =》函数优化 -》缓存函数 memorize
//阶乘
//n!=n*(n-1)
//6!=5*4*3*2*1
//0!=1
//n!=n*(n-1)*...*2*1
var times = 0;
function factorial(n) {
  times++;
  if (n === 1 || n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(6));
