// const MyPromise = require("./MyPromise.js");
const p = new Promise((resolve, reject) => {
  // resolve(1);//test1
  // throw new Error("error1"); //test2
  setTimeout(() => {
    resolve(2);
  }, 500);
});
p.then(
  (res) => {
    console.log(res);
  },
  (reason) => console.log("rejected1", reason)
).then((res) => {
  console.log(res);
});
