// this全面解析
// 必须找到调用位置，然后判断需要应用下面的哪一条，每条都适应时优先规则又是什么
// this有4种绑定的规则，并且有优先级排列，具体如下

//^1 默认绑定
//* 默认绑定的this指向全局对象，window和global（node环境）

function () {
  var a = 'foo'
  console.log(this.a) // window
}
var a = 'window'
function bar() {
  var a = 'bar'
  foo()
}
bar()

// 那么怎么判断采用默认绑定的方式呢？这个demo中foo直接采用不带任何修饰的函数引用进行调用的，因此就是默认绑定。
// 又一个小细节，foo运行在strict模式下，this不能绑定到全局对象。
// 注意是运行不是调用，外部的调用函数在strict模式下没影响。

//^2 隐式绑定
// 这条规则需要考虑调用位置是否有上下文的对象

function () {
  console.log(this.a)
}

var obj = {
  a: 1;
  foo: foo
}
obj.foo() // 1
//* 当函数有上下文对象时，隐式绑定会把this绑定到这个上下文对象。
//* 对象属性引用作用域链中只有上一层或者说最后一层在调用位置中起作用
// 

function foo() {
  console.log(this.a)
}

var obj1 = {
  a: 'obj1',
  foo: foo
}
var obj2 = {
  obj1: obj1,
  a: 'obj2'
}
obj2.obj1.foo() // obj1
隐性丢失
以下情况都会丢失绑定对象


function foo() {
  console.log(this.a)
}
var obj = {
  foo: foo,
  a: 'inner'
}
var _foo = obj.foo
var a = 'global'
_foo() // global
_foo是obj.foo的 一个引用，实际上他是引用foo函数本身，因此此时的调用也是一个不带任何修辞的函数调用，默认绑定。

还有一种更加常见的丢失情况在回调函数中发生。

function foo() {
  console.log(this.a)
}
var a = 'global'
var obj = {
  a: 1,
  foo: foo
}
function doFoo(fn) {
  fn()
}
doFoo(obj.foo) // global
参数传递也是一种隐式赋值，结果跟上面的一样，丢失上下文对象
同样原生内置的方法，也是一样的。


function foo() {
  console.log(this.a)
}
var obj = {
  foo: foo,
  a: 'inner'
}
var a = 'global'

setTimeout(obj.foo, 1000) // global
显式绑定
Javascript所有的函数原型链上都有call和apply方法。这2个方法是如何工作的呢？第一个参数是一个对象，为this准备的，调用的时候绑定到this。


function foo() {
  console.log(this.a)
}
var obj = {
  a: 'inner'
}
foo.call(obj) // inner
解决绑定丢失的问题

function foo() {
  console.log(this.a)
}

var obj1 = {
  a: 'inner'
}

function bar() {
  foo.call(obj1)
}

setTimeout(bar, 2000) // inner
apply 实现 bind
call 和 apply的区别在于第二个参数，跟bind的区别，bind()是绑定this并返回一个函数，并没有执行。call和apply直接执行

function foo(something) {
  console.log(this.a, something)
}

Function.prototype.bind = function (obj) {
  let self = this
  return function () {
    self.apply(obj, arguments)
  }
}

var obj1 = {
  a: 'try to do'
}

var bar = foo.bind(obj1)
bar('what you want') // try to do what you want
new绑定
使用new调用函数，会执行以下操作

创建全新的对象
这个新对象会执行[[prototype]]连接
这个新对象会绑定到函数调用的this
如果函数没有返回其他对象，new表达式中的函数调用会自动返回这个新对象

function foo(a) {
  this.a = a
}

var obj = new foo('inner')
console.log(obj) // {a: inner}
四种规则的优先级依次升高，new > 显式 > 隐式 > 默认

this词法
箭头函数中的this并不根据以上的几条规则来决定，根据外层作用域决定（词法作用域）。

function foo() {
  return (a) => {
    console.log(this.a)
  }
}
var obj1 = {
  a: 'obj1'
}
var obj2 = {
  a: 'obj2'
}

var bar = foo.call(obj1)
bar.call(obj2) // obj1
这里输出的是obj1，箭头函数的词法作用域中的this是obj1，所以继承下来了。
可以解决一些隐式绑定中丢失的问题。
以前一直好奇为啥有时候会写：var self = this

var a = 'global'
var obj = {
  a: 'inner'
}

function foo() {
  console.log('outThis:', this)
  var self = this
  setTimeout(function () {
    console.log('innerThis', this)
    console.log('self', self)
    console.log(self.a)
  }, 2000)
}

foo.call(obj)
现在我理解了，foo.call(obj)的时候，outThis是指向obj的，但是在回调中，隐式丢失，innerThis是global对象了，所以用一个变量self保存outThis，由于闭包的原理，self会一直保存对这个变量的引用并且内层函数有访问权限。

那么换一种实现呢

var a = 'global'
var obj = {
  a: 'inner'
}

function foo() {
  setTimeout(() => {
    console.log(this.a)
  }, 2000)
}

foo.call(obj) // inner
箭头函数的this绑定规则不遵守以上的4种规则。如下例


const foo = () => {
  console.log(this.a)
}
var obj = {
  a: 'inner',
  foo: () => {
    console.log(this.a)
  }
}
var a = 'global'
obj.foo() // global
小结
this判断的规则

由new调用？绑定到新创建的对象
由call或者apply或者（bind）调用？绑定指定对象
由上下文对象调用？绑定上下文对象
默认，严格模式下到undefined，否则绑定global对象
箭头函数根据词法作用域决定