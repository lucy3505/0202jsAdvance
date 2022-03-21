async function async1() {
  console.log("a1 start");
  await async2(); //p1
  console.log("a1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(() => {
  //s1
  console.log("setTimeout");
}, 0);

async1();

new Promise((resolve) => {
  console.log("promise");
  resolve();
}).then(() => {
  //p2
  console.log("promise2");
});

console.log("script end");
/**
 * script start
 * a1 start
 * async2
 * promise
 * script end
 * a1 end
 * promise2
 * setTimeout
 */
