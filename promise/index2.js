const MyPromise = require("./MyPromise2");
let promise2 = new MyPromise((resolve, reject) => {
  console.log("Start");
  resolve("Promise");
  // return new MyPromise((resolve, reject) => {
  //   resolve("re");
  //   reject("reject");
  // });
  // reject("perror");
});
const p3 = promise2.then(
  (y) => {
    console.log(y);
    return new MyPromise((resolve, reject) => {
      // resolve(resolve("resolve2"));
      resolve("resolve3");
      // resolve("resolve4");
      // setTimeout(() => {
      //   reject("resolve4");
      // }, 0);
    });
  },
  (v) => {
    console.log(v);
  }
);
p3.then(
  (res) => {
    console.log(1);
    console.log(res);
    return new MyPromise((resolve, reject) => {
      console.log(6);
      console.log(res);
      resolve("rrr");
    });
    return "bb";
  },
  (err) => {
    console.log(err);
  }
).then((res) => {
  //这里return的是promise 所以then 里面又是个异步
  console.log(3);
  console.log(res);
});
p3.then((res) => {
  //p3是promise  所以then里是异步
  console.log(2);
  console.log(res);
  return "aa";
}).then((Res) => {
  //这里的then不是异步  因为返回的不是promise
  console.log(4);
  console.log(Res);
});
// .then(
//   (y) => {
//     console.log("y:", y);
//   },
//   (r) => {
//     console.log("r:", r);
//   }
// );

// let p3 = promise2
//   .then(
//     (y) => {
//       console.log(y);
//       return new MyPromise((resolve, reject) => {
//         resolve("resolve");
//       });
//     },
//     (v) => {
//       console.log(v);
//     }
//   )
//   .then(
//     (y) => {
//       console.log("y1:", y);
//     },
//     (r) => {
//       console.log("r1:", r);
//     }
//   );

// promise2.then((Res) => {
//   console.log("rrrr", Res);
// });

// const p2 = promise2
//   .then()
//   .then((res) => console.log("ww", res))
//   .then(() => {
//     console.log("newwww");
//     return new Promise((resolve) => {
//       resolve("oooo111");
//     });
//   });
// p2.then((res) => {
//   console.log(res);
// });

// const p3 = promise2.then().then((res) => {
//   console.log("p2", res);
//   return 3;
// });

// p3.then((res) => {
//   console.log("p3", res);
// });
