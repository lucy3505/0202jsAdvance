let res = function () {
  console.log(1);
  return new Promise((resolve, reject) => {
    console.log(2);
    resolve(4);
  });
};

new Promise(async (resolve, reject) => {
  console.log(3);
  let test = await res();
  console.log(test);
});

console.log(5);
new Promise((resolve, reject) => {
  console.log(6);
});

console.log(7);

// 3;
// 1;
// 2;
// 5;
// 6;
// 7;
// 4;
