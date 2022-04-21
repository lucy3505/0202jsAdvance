let fn = function () {
  console.log("i am a function");
};
fn.a = 123;
let newFn = new Proxy(fn, {
  get(fn, prop) {
    return fn[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    console.log(target[prop]);
  },
});
