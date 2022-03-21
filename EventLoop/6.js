const oBtn = document.getElementById("btn");
//宏任务中，时间处理函数=>回调  宏任务的回调
oBtn.addEventListener(
  "click",
  function handle1() {
    console.log("1");
    Promise.resolve("m1").then((str) => {
      console.log(str);
    });
  },
  false
);

oBtn.addEventListener(
  "click",
  function handle2() {
    console.log("2");
    Promise.resolve("m2").then((str) => {
      console.log(str);
    });
  },
  false
);

oBtn.click(); //!如果是由js触发click,就相当于同步是执行了两个函数handle1和handle2

// 1
//  2
// m1
//  m2

//! 如果是用户点击触发了事件 那就是添加宏任务，一条条宏任务执行，而不是同步去执行两个函数

// 点击的结果：
// 1
// m1
// 2
// m2
