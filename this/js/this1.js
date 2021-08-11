/**
 * this ->javaScript 关键字
 * 当前环境执行期上下文对象的一个属性
 * this在不同的环境、不同作用下，表现不同
 */

//全局作用域下的this-> 全局对象
//window 和 this 关系
console.log(this===window)//true
// var a = 1;
// var b=function(){return 'function'}
// console.log(window.a===a)//true
// console.log(window.b===b)//true
// console.log(a)
// console.log(b)

// window.aa=1;//===this.aa=1
// window.bb=function(){return 'function'}//===this.bb=function(){return 'function'}
// console.log(aa)//1
// console.log(bb)//function

//this => 浏览器 node worker
/**
 * 获取全局对象
 * web：window,self,frames,this
 * node:global,
 * worker:self
 * 通用：globalThis
 * 
 */
var a = 'global -> a'
var obj={
  a:'obj => a',
  test:function(){
    console.log(this.a);
    console.log(globalThis.a);
    console.log(self.a)
    console.log(frames.a)
  }
}
// "use strict"
function test(){
  return this;//严格模式下this是undefined,否则是window
}
console.log(test())//严格模式下是undefined
//谁调用函数，函数内部的执行默认就是谁
console.log(window.test())//严格模式化下还是window,因为用window调用了