const oBtn = document.getElementById("btn");
//!宏任务中，时间处理函数=>回调  宏任务的回调
oBtn.addEventListener(
  "click",
  function handle1() {
    setTimeout(() => {
      console.log("1");
    }, 0);
    Promise.resolve("m1").then((str) => {
      console.log(str);
    });
  },
  false
);

oBtn.addEventListener(
  "click",
  function handle2() {
    setTimeout(() => {
      console.log("2");
    }, 0);
    Promise.resolve("m2").then((str) => {
      console.log(str);
    });
  },
  false
);

oBtn.click();
// 1
//  2
// m1
//  m2
