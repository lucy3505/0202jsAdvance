var target = { a: 1, b: 2 };

let proxy = new Proxy(target, {
  get(target, prop) {
    // console.log(`this is property value ${target[prop]}`);
    return `this is property value ${target[prop]}`;
  },
  set(target, prop,value) {
    target[prop]=value
    console.log(target[prop]);
  },
});

console.log(proxy.a);
console.log(target.a);
proxy.b = 3;//这里改了  target也改了
console.log(target);
