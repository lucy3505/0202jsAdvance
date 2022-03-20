//100以内的数跳过可以被7整除或个位数是7的数

for (var i = 0; i < 100; i++) {
  if (i % 7 === 0 || i % 10 === 7) {
    continue;
  }
  console.log(i);
}
