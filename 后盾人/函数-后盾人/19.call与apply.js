//call 和apply的区别
//传递参数上的区别
let lisi = {
    name:'lisi'
};
let wangwu = {
    name:'wangwu'
}
function User(web,url){
    console.log(this.name)
}

User.call(lisi,'后盾人','houdunren.com')//lisi  //这个call会立刻执行这个函数，所以不需要再调用
User.apply(lisi,['后盾人','houdunren.com'])//lisi
//apply传递一个数组，且和call一样立刻执行
//*call改变函数里的this指向
function show(){
    alert(this.innerHTML)
}
let buttons = document.querySelectorAll('button')
for(let i=0;i<buttons.length;i++){
    // buttons[i].addEventListener('click',function(){
    //     show.call(this)//!这里使用this就可以
    // })
     buttons[i].addEventListener('click',(event)=>{
        show.call(event.target)//*使用箭头函数就要用event,否则this指向的就是window
    })
    //*不传参数的话，call和apply是一样的

    //获取最大值:如果是数组的话
    console.log(Math.max(12,2,3,6))
    let arr = [123,2,3,4]
    console.log(Math.max(...arr))
    //!体会下面这段
    console.log(Math.max.apply(Math,arr))//不能使用call
    // 数组本身没有提供获取最大值的方法，我们就借助Math对象的功能
}