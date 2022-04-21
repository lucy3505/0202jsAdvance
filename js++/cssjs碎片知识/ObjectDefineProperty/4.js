function defineProperty() {
  var _obj = {};
  var a = 1;
  //每一个属性定义的时候  getter setter机制
  Object.defineProperties(_obj, {
    a: {
      get() {
        return `a value is ${a}`;
      },
      set(newV) {
        console.log(`this value 'a' has been design a new value ${newV}`);
      },
    },
    b: {},
  });
  return _obj;
}

var obj = defineProperty();

obj.a = 4;
console.log(obj.a);
console.log(obj);
//数据劫持
