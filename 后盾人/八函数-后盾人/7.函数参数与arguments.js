function hd(a) {
  return a <= 3
}
// let arr = [1,2,3,4,5,6,7].filter(function(a){
//   return a<=3
// })
let arr = [1, 2, 3, 4, 5, 6, 7].filter(hd)
var i = 0
function cms() {
  console.log(++1)
}
setTimeout(cms, 1000)
function event() {
  alert(this.innerHTML)
}
// document.getElementById('hd').addEventListener('click',function(){
//   alert(this.innerHTML)
// })
document.getElementById('hd').addEventListener('click', event)
//函数作为参数是不受类型约束的，基本上大部分类型都能作为参数传递

//arguments:历史遗留
function sum() {
  // console.log(arguments.length)
  // let total=0
  // for(let i=0;i<arguments.length,i++){
  //   total+=arguments[i]
  // }
  // return total
  return [...arguments].reduce((a, b) => a + b)
}
function sum(...args)//点语法，args就变成了数组,点语法替换arguments
//return args.reduce((a,b)=>a+b)
console.log(sum(2, 3, 4, 5, 3))
