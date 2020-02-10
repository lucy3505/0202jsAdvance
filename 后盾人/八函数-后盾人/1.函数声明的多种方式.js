//很多类型都是对象
let str = new String('fds.com')//字符串也是对象
console.log(str)

//这样有助于理解字面量的变现形态
//?引号定义的为什么可以执行方法呢？
//因为你下面这种写的最终也会转成对象的形式，能够方便你调用方法
let str = 'fds'
console.log(str)

//函数也是对象
let func = new Function('title', 'console.log(title)')//第一个为参数，第二个为函数体
func('后盾人')
//上面这个不方便，所以推荐使用字面量的形式，如下
function hd(title) {
  console.log(title)
}
hd('houdunren')
//函数的价值：使一断重复使用的功能用函数封装起来，然后反复调用
//除了这种方法，还可以给函数赋值//``函数作为表达式赋值
let cms = function (tittle) {
  console.log((title))
};//这是表达式，赋值语句，需要;
cms('fdd')

//把一堆函数放到一个对象中
let user = {
  name: null,
  setUserName: function () {
    this.name = name
  },
  getUsername() {//简写形式
    return this.name
  }
}
user.setUserName('后盾人')
console.log(user.getUsername)
//对象存在的价值：把一些属性方法放在里面