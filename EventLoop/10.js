setTimeout(() => {
  console.log(1);
}, 0);

new Promise((resolve, reject) => {
  console.log(2);
  resolve();
})
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(4);
  });
console.log(6);

// 2
// 6
// 3
// 4
// 1
