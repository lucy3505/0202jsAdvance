console.log("start");

const interval = setInterval(() => {
  //s1 s3 s5
  console.log("setInterval");
}, 0);

setTimeout(() => {
  //s2
  console.log("setTimeout 1");
  Promise.resolve()
    .then(() => {
      console.log("promise 3");
    })
    .then(() => {
      console.log("promise 4");
    })
    .then(() => {
      setTimeout(() => {
        //s4
        console.log("setTimeout 2");
        Promise.resolve()
          .then(() => {
            console.log("promise 5");
          })
          .then(() => {
            console.log("promise 6");
          })
          .then(() => {
            clearInterval(interval);
          });
      }, 0);
    });
}, 0);
Promise.resolve()
  .then(() => {
    console.log("promise 1");
  })
  .then(() => {
    console.log("promise 2");
  });
//! setInterval每次执行的时候都要再往宏任务里加个setInterval
// start
// promise 1
// promise 2
// setInterval
// setTimeout 1
// promise 3
// promise 4
// setInterval
// setTimeout 2
// promise 5
// promise 6
