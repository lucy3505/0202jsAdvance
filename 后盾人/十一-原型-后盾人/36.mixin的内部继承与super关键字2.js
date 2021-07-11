//上一节的功能类的对象也能实现继承

// 比如积分功能也要请求后台
//?这时候怎么实现继承
//原理很简单：只要是对象，就有原型__proto__
const Request={
    ajax(){
        return '请求后台'
    }
}
const Credit={
    __proto__:Request,//Request要在前面，否则找不到
    total(){
        // console.log(this.__proto__.ajax(+'积分统计')
        //!super就是原型this.__proto__,super是当前这个类的原型,不要调用对象的原型
        //super=this.__proto__
        console.log(this)
        console.log(this.__proto__)
        console.log(this.__proto__.ajax()+'积分统计')
        console.log(this.name)
    }
}
function Admin(){
    this.name="admin"
}
Admin.prototype=Object.assign(Admin.prototype,Credit)
let admin = new Admin()
//*super不是调用对象（也就是admin）的原型
// !admin.total进入到了Credit这个对象去调用total,所以this.__proto__还是指向的Credit这个对象的原型
admin.total()


