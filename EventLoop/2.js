console.log(1);
setTimeout(() => {
  console.log(2);
}, 10);
new Promise((resolve, reject) => {
  console.log(3);
  resolve("");
  console.log(4);
}).then((res) => {
  console.log(5);
});
console.log(6);

// 1;
// 3;
// 4;
// 6;
// 5;
// 2;
