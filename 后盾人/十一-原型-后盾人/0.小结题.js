
//2里面  解释下面这段话得含义
let hd = Object.create(null,{
    name:{
        value:"houdunren "
    }
})
//?下面输出什么
console.log(hd.hasOwnPropery("name"))

//?为对象设置原型得方法? //8、
//?查看原型得方法
let hd = {name:'hd'}
let parent = {
    name:'parent',
    show(){
        console.log('parent method' + this.name)
    }
}
// hd.__proto__=parent
Object.setPrototypeOf(hd,parent)
//查看原型
console.log(Object.getPrototypeOf(hd))

//9.
//?构造函数通过prototype找到原型，构造函数通过prototype找到构造函数


//9.
//往prototype添加方法，只是用
