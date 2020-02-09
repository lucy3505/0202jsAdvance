//bind call

function show(){
    console.log(this.name)
}
show.apply({name:'后盾人'})//call和apply是立即执行
show.bind({name:'hdcms'})()//不会立即执行，要加（）

let a = function(){

}
let b= a
console.log(a===b)//true

b=a.bind()//重新复制了一份函数
console.log(a===b)//false


//参数传递：有2个渠道
//call和apply就一个渠道，但bind有两个渠道
function hd(a,b){
    console.log(a,b)
    return this.f + a +b
}
console.log(hd.call({f:1},1,2))//3
let func = hd.bind({f:1},1,2))//不会执行,返回了新的函数,{f:1}赋值给this,1赋值给a,2赋值给b
func()//a=1,b=2
func(3,4)//如果这里又传参，a,b都传完了，3，4都没用，如果前面Bind里面的传参没有传完，3，4就有用了
//!bind适合在你之后函数调的时候可以使用，例如:事件
//不是给元素加完事件了就会立即执行
document.querySelector('button').addEventListener('click',function(event){
    alert(2)//这种函数是不会立即执行的
    document.write(this.url+event.target.innerHTML)
}.bind({url:'houdunren.com'}))
