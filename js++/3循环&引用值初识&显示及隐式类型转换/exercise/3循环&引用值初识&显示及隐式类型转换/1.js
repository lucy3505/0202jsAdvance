//从0开始做加法，加到什么时候总和 是小于100的
var s = 0;
for (var i = 0; i <= 100; i++) {
  s = s + i;

  if (s >= 100) {
    break;
  }
  console.log(s, i);
}
// console.log(i);
