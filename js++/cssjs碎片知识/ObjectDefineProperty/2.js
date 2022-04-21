//Object.defineProperty()
//Object=>defineProperty()  定义属性

// (obj,prop,descriptor)

// descriptor  描述项集合  配置集合

function defineProperty() {
  var _obj = {};
  // Object.defineProperty(_obj, "a", {
  //   value: 1,
  // });
  Object.defineProperties(_obj, {
    a: {
      value: 1,
      writable: true, //不写的时候就是false
      enumerable: true,
      configurable: true, //这个操作一般指的是删除
    },
    b: { value: 2 },
  });
  return _obj;
}

var obj = defineProperty();

obj.a = 5;
obj.b = 4;
console.log(obj);
for (var key in obj) {
  console.log(key + ":" + obj[key]);
}

//conf  =>文件夹
//config =>文件

delete obj.a;
console.log(obj);
