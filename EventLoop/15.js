var promise = new Promise((resolve) => {
  console.log(1);
  resolve();
});

setTimeout(() => {
  //s1
  console.log(2);
});

promise.then(() => {
  //p1
  console.log(3);
});

var promise2 = getPromise();
async function getPromise() {
  console.log(5);
  await promise; //p2
  console.log(6);
}
console.log(8);

/**
 * 1
 * 5
 * 8
 * 3
 * 6
 * 2
 *
 */
