let res = function () {
  console.log(1);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //2
      new Promise((resolve, reject) => {
        console.log(2);
        setTimeout(() => {
          //5
          console.log(3);
        }, 0);
      });
    }, 0);
    resolve(5);
  });
};

new Promise(async (resolve, reject) => {
  setTimeout(() => {
    //1
    Promise.resolve().then(() => {
      console.log(4);
    });
  }, 0);
  let test = await res();
  console.log(test);
});

setTimeout(() => {
  //3
  console.log(6);
}, 0);
new Promise((resolve, reject) => {
  setTimeout(() => {
    //4
    console.log(7);
  }, 0);
});

console.log(8);
// 1
// 8
// 5
// 4
// 2
// 6
// 7
// 3
