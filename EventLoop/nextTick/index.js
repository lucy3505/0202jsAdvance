//process.nextTick 作为微任务是优先于promise运行的

process.nextTick(() => {
  console.log("next Tick1");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("setTimeout");
}, 0);

process.nextTick(() => {
  console.log("next Tick2");
});
