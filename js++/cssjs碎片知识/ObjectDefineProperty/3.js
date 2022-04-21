function defineProperty() {
  var _obj = {};
  // var a = 1;
  //每一个属性定义的时候  getter setter机制
  Object.defineProperties(_obj, {
    a: {
      get() {},
      set(newV) {
        a = newV;
        var oP = document.getElementsByTagName("p")[0];
        oP.innerHTML = a;
      },
    },
    b: {},
  });
  return _obj;
}

var obj = defineProperty();

obj.a = 1;
console.log(obj.a);
