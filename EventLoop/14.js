console.log("1");
setTimeout(() => {
  //s1
  console.log("2");
  new Promise((resolve) => {
    console.log("3");
    resolve();
  }).then(() => {
    //p1
    console.log("4");
  });
});

new Promise((resolve) => {
  console.log("5");
  resolve();
}).then(() => {
  //
  console.log("6");
});

setTimeout(() => {
  //s2
  console.log("7");
});

setTimeout(() => {
  //s3
  console.log("8");
  new Promise((resolve) => {
    console.log("9");
    resolve();
  }).then(() => {
    console.log("10");
  });
});

new Promise((resolve) => {
  console.log("11");
  resolve();
}).then(() => {
  //
  console.log("12");
});
console.log("13");

// 1;
// 5;
// 11;
// 13;
// 6;
// 12;
// 2;
// 3;
// 4;
// 7;
// 8;
// 9;
// 10;
