//通过前面知道，对象有一个属性来记录它的原型或者说父亲，通过__proto__能找到它的长辈
//如果这个对象没有这个功能，长辈有的话就会自动继承过来

let hd = {
    show(){
        console.log('后盾人')
    },
    // render(){
    //     console.log('hd.render')
    // }
}
hd.__proto__.render=function () {
    console.log("xj")
}
hd.render()//自己有就显示自己的，显示hd.render,没有的话就显示__proto__的，而且__proto__要写前面，否则报错

// hd.__proto__.render=function () {
//     console.log("xj")
// } 