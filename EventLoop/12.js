async function async1() {
  console.log("a1 start");
  await async2();
  console.log("a1 end"); //p2
}

async function async2() {
  new Promise((resolve) => {
    console.log("promise 1");
    resolve();
  }).then(() => {
    //p1
    console.log("promise 2");
  });
}

console.log("script start");

setTimeout(() => {
  //s1
  console.log("setTimeout");
}, 0);

async1();

new Promise((resolve) => {
  console.log("promise3");
  resolve();
}).then(() => {
  //p3
  console.log("promise4");
});

console.log("script end");
/**
 * script start
 * a1 start
 * promise 1
 * promise3
 * script end
 * promise 2
 * a1 end
 * promise4
 * setTimeout
 */
