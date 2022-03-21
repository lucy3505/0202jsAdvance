Promise.resolve().then(() => {
  console.log("p1");
  setTimeout(() => {
    console.log("s2-1");
  }, 0);
  setTimeout(() => {
    console.log("s2-2");
  }, 0);
});

// setTimeout(() => {
//   console.log("s1");
//   Promise.resolve().then(() => {
//     console.log("p2");
//   });
// });

setTimeout(() => {
  console.log("s1");
  Promise.resolve()
    .then(() => {
      console.log("p2-1");
    })
    .then(() => {
      console.log("p2-2");
    });
});

//p1
//s1
// p2-1
// p2-2
//s2-1
//s2-2

//执行栈
//宏任务 setTImeout1
//  回调队列->setTimeout callback
//微任务
