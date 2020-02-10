// let hd = function (){
//   return 1+2
// }
let hd = () => {
  return 1 + 2
}
console.log(hd())
let hd = [1, 2, 3, 4, 5].filter(v => v <= 3)//只有一个参数，不需要(v,i)，一行表达式不需要return关键字
//在一些递归函数，构造函数，事件处理（DOM）的时候不方便使用箭头函数。
//箭头函数没有具体的名字，用于回调也不是很方便
//this,作用域