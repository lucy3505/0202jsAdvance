const MyPromise = require("./MyPromise2");
let promise2 = new MyPromise((resolve, reject) => {
  console.log("Start");
  // resolve("Promise");
  resolve(
    new MyPromise((resolve, reject) => {
      resolve(99);
    })
  );
  // reject("perror");
});

// let promise2 = promise1.then(
//   (v) => {
//     // console.log(11);
//     console.log("hh", v);
//     return new MyPromise((resolve, reject) => {
//       resolve(
//         new MyPromise((resolve, reject) => {
//           resolve(11);
//         })
//       );
//     });
//     // return 12;
//   },
//   (reason) => {
//     // return "error";
//     // console.log("error");
//   }
// );
// console.log("p", promise2);
// promise2.then(
//   (value) => {
//     console.log("value-----", value);
//   },
//   (reason) => {
//     console.log("reason", reason);
//     console.log(reason);
//   }
// );

// MyPromise.resolve("r1").then((r) => {
//   console.log(r);
// });
promise2
  .then()
  .then()
  .then(() => {
    console.log("newwww");
    return new Promise((resolve, reject) => {
      resolve("oooo");
      reject("errorrrrrr");
    });
  })
  .then(
    (res) => {
      console.log("kkk", res);
    },
    (reason) => {
      console.log(reason);
    }
  );
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
