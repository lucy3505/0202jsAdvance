console.log(1);
const MyPromise = require("./MyPromise2");
let promise = new MyPromise((resolve, reject) => {
  //excutor
  resolve("success");
  // reject("error");
  // throw new Error("Exception Error");
  // setTimeout(() => {
  //   resolve("success");
  // }, 1000);
});

promise.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log("Rejected:" + reason);
  }
);
promise.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log("Rejected:" + reason);
  }
);
