let promise1 = new Promise((resolve, reject) => {
  resolve("Promise");
});

let promise2 = promise1.then(
  () => {
    return 1;
  },
  (reason) => {}
);
promise2.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
