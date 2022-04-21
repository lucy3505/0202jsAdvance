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
      // writable:false 不写的时候就是false
    },
    b: { value: 2 },
  });
  return _obj;
}

var obj = defineProperty();

obj.a = 5; //? obj里面的a没有变化  属性值不可修改
console.log(obj);

for (var k in obj) {
  console.log(k + ":" + obj[k]); //不可打印  属性也不可枚举  把对象中的每个key值拿出来  就是枚举  拿不拿得到key值
}

delete obj.a; //属性不可删除
console.log(obj);

//只要用defineProperty去进行修改属性都不行
