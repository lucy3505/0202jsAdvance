//对象属性声明
class User{
    site = "houdun" //*这里定义属性也可以，只是不能传参，也是给实例化出的对象赋予属性,这些属性是每个实例化出的对象独有的，不共享，之后后面的方法是共享的
    constructor(name){
        this.name
    }
    changeSite(v){
        this.site = v
    }
    show(){
        return `${this.site}:${this.name}`
    }
}
let hd  = new User("houdunren")
console.log(hd)//{name:'houdunren',site:'houdun'}

let xj=new User('xj')
console.log(xj)//{name:'xj',site:'houdun'}