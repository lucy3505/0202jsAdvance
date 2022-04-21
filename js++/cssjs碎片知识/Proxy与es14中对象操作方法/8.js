let target = { a: 1, b: 2 };

// let proxy = new Proxy(target, {
//   get(target, prop) {
//     return target[prop];
//   },
//   set(target, prop, value) {
//     target[prop] = value;
//   },
// });

// console.log(proxy.a)
// proxy.b=4;
// console.log(proxy.b)

//使用defineProperty实现

function MyProxy(target, handler) {
  let _target = deepClone(target);
  // console.log(_target);
  Object.keys(_target).forEach((key) => {
    Object.defineProperty(_target, key, {
      get() {
        return handler.get && handler.get(target, key);
      },
      set(newV) {
        handler.set && handler.set(target, key, newV);
      },
    });
  });
  return _target;

  function deepClone(org, tar) {
    var tar = tar || {},
      toStr = Object.prototype.toString,
      arrType = "[Object Array]";
    for (var key in org) {
      if (org.hasOwnProperty(key)) {
        if (typeof org[key] === "object" && org[key] !== null) {
          tar[key] = toStr.call(org[key]) === arrType ? [] : {};
          deepClone(org[key], tar[key]);
        } else {
          tar[key] = org[key];
        }
      }
    }
    return tar;
  }
}

let proxy = new MyProxy(target, {
  get(target, prop) {
    return "GET:" + prop + "=" + target[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    console.log("SET:" + prop + "=" + value);
  },
});
console.log(proxy);
// proxy.b = 3;
proxy.g = 8;
console.log(proxy);
console.log(target);

let proxy2 = new Proxy(target, {
  get(target, prop) {
    return "GET:" + prop + "=" + target[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    console.log("SET:" + prop + "=" + value);
  },
  has(target, prop) {
    console.log(target[prop]);
  },
  deleteProperty(target, prop) {
    delete target[prop];
  },
});
proxy2.a = "aa";
console.log(target);

// Proxy 内部方法=>
//defineProperty原则上是给对象增加属性用的，但是修改数组长度，push,pop方法是没办法触发set，proxy就没有这个问题，对下标的操作都会触发set
//数据劫持 是对源对象进行操作的时候进行拦截
