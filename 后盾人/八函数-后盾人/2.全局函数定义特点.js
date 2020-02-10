//全局函数
function screenX() {
  console.log('后盾人')
}
//定义的函数会自动压入window这个全局对象，这样是不对的，历史遗留问题，比如说
window.screenX //*这时候我们定义的函数名覆盖了原来window里自有的对象，这是有问题的，所以更建议使用之后模块方法


var cms = function () {
  console.log('fddf.com')
}
window.cms()//*属性也会压入window里面，但是使用let声明是不会往window压的

let cm = function () {
  console.log('cn')
}
window.cm()//报错
cm()//可以执行
//建议函数不要独自存放，都使用类
