var a = 2;
var obj = {
  a: 1,
  test: function () {
    console.log(this); //对象里的属性可以通过this访问对象本身，对象方法里通过this访问对象本身
    console.log(this.a);
  },
};

obj.test();
var obj2 = {
  a: 2,
  test: function () {
    console.log(this.a); //这个this指向当前方法的上层对象，不会指向其他对象
  },
};
obj2.test();
