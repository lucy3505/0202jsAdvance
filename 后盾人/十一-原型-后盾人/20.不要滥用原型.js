//不要滥用原型
// 所有对象原型链的顶层是Object.prototype
Object.prototype.hide = function () {
  this.style.display = "none"
}

//会引用多个库，如果都这么写，后加载的就会覆盖前面的hide，不稳定，不要在系统的原型中追加方法
