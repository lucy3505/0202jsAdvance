async function async1() {
  console.log("a1 start");
  await async2();
  setTimeout(() => {
    //p1 s3
    console.log("setTimeout1");
  }, 0);
}

async function async2() {
  setTimeout(() => {
    //s2
    console.log("setTimeout2");
  }, 0);
}

console.log("script start");

setTimeout(() => {
  //s1
  console.log("setTimeout3");
}, 0);

async1();

new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2"); //p2//
});

console.log("script end");

/**
 * script start
 * a1 start
 * promise1
 * script end
 * promise2
 * setTimeout3
 * setTimeout2
 * setTimeout1
 */
