console.log(1);
setTimeout(() => {
  Promise.resolve().then(() => {
    console.log(2);
  });
}, 10);
new Promise((resolve, reject) => {
  console.log(3);
  resolve("");
  console.log(4);
}).then((res) => {
  setTimeout(() => {
    console.log(5);
  }, 0);
});
console.log(6);

// 1
// 3
// 4
// 6
// 2
// 5
//setTimeout有时间的不同  所以是
// 1
// 3
// 4
// 6
// 5
// 2
