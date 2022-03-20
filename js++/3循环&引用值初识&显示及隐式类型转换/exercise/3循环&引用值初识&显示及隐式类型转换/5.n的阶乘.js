//n的阶乘
var n = 5;
var s = 1;
for (var i = 1; i <= n; i++) {
  s = s * i;
}
console.log(s);

//不用for  用递归

function fact(n) {
  if (n === 1) {
    return 1;
  }

  s = n * fact(n - 1);
  return s;
}

sum = fact(5);
console.log(sum);

//斐波那契数列
// 1+1+2+3+5+8+13+21
// n3=n2+n1
function fei(n) {
  if (n < 1 || n <= 2) {
    return 1;
  }
  var s = fei(n - 1) + fei(n - 2);
  return s;
}

var s1 = fei(7);
console.log(s1);
