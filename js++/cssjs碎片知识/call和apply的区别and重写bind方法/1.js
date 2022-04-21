var p1 = {
  name: "zhangsan",
  hobby: this.hobby,
  play: function () {
    console.log(
      "年龄为" + age + `岁，性别为${sex}的,${this.name}喜欢${this.hobby}`
    );
  },
};

var p2 = {
  name: "李四",
  hobby: "踢足球",
};

p1.play.call(p2, "男", 20);
//call改变this指向并立即执行
p2.play.apply(p2, ["男", 20]);
var fn = p1.play.bind(p2, "男", 20)();
fn();
//bind改变this指向，返回一个新的函数，不执行

//一般函数嵌套函数，绑定事件处理函数这个事件也会有this问题
//改变this指向一般都是用在面向对象，面向对象中一般就两种情况：1、函数套函数，2：函数里面return 闭包； 3：事件驱动 事件处理函数,4：ajax
