// 一个班级，学生名单保存在一个数组里，两个方法写在函数中的一个对象中，第一个方法加入班级，第二个方法离开班级，每次加入或离开，都需要打印新的学生名单

var cls = (function oneClass() {
  var list = [];
  var methods = {
    join(name) {
      list.push(name);
      console.log(list);
    },
    leave(name) {
      list.forEach((item, i) => {
        if (item === name) list.splice(i, 1);
      });
      console.log(list);
    },
  };

  return methods;
})();
cls.join("a");
cls.join("b");
cls.join("c");
cls.leave("b");
cls.join("b");
