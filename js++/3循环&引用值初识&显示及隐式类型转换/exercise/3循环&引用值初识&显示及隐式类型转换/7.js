//打印100以内的质数
//仅仅能被1和自己整除的数

for (var i = 1; i < 100; i++) {
  let c = 0;
  for (var j = 1; j <= i; j++) {
    if (i % j == 0) {
      c++;
    }
  }
  if (c == 2) {
    console.log(i);
  }
}
