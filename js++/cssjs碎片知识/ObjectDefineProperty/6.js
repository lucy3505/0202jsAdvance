function defineProperty() {
  var _obj = {};
  var a = 1;
  //每一个属性定义的时候  getter setter机制
  Object.defineProperties(_obj, {
    a: {
      value: 1,
      writable: true, //get set 与writable和value互斥  writable和value出现任意一个就不能出现set和get,否则会产生一个异常
      get() {
        return a;
      },
      set(newV) {
        a = newV;
        console.log(`this value 'a' has been design a new value ${newV}`);
      },
    },
    b: {},
  });
  return _obj;
}

var obj = defineProperty();

//数据劫持
