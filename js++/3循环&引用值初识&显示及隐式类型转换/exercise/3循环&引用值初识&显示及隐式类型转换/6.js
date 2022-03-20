//

var num = 789;
var res = "";
let s = 1;
for (var i = 1; i <= 3; i++) {
  s = s * 10;
  res += num % s;
  console.log(res);
}
console.log(res);

// const res = 234 % 10;
// console.log(res);
