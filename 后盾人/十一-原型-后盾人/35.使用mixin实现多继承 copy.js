//php 有trait minxin混合功能
//!改良：把这些功能都变成对象
//逻辑就是定义一些功能对象，要用的时候把他们压到对象里就行了
//多继承做不了 ，会带来问题

//?这时候Member有个收获地址的功能，同时也有统计积分等功能
function extend(Son,Parent){
    Son.prototype = Object.create(Parent.prototype)
    Object.defineProperty(Son.prototype,"constructor",{
        value:Son,
        enumerable:false
    })
}
function User(name,age){
    this.name = name
    this.age = age
}

//``请求后台的方法
// function Request(){

// }
const Address = {
    getAddress(){
         console.log('收获地址')
    }
}
const Credit={
    total(){
        console.log('积分统计')
    }
     
}
const Request={
    ajax(){
        console.log('请求后台')
    }
}
// function Address(){

// }
// extend(Credit,Address)
// Address.prototype.getAddress=function(){
//     console.log('收获地址')
// }

User.prototype.show=function(){
    console.log(this.name,this.age)
}

// function Credit(){

// }
// Credit.prototype.total=function(){
//     console.log('积分统计')
// }

// Request.prototype.ajax=function(){
//     console.log('请求后台')
// }

// function Admin(...args){
//     User.apply(this,args)
// }
// function Member(...args){
//     User.apply(this,args)
// }
extend(Admin,User)
extend(Member,User)
//! Admin.prototype = Object.assign(Admin.prototype,Requset,Credit)
Admin.prototype = Object.assign(Admin.prototype,Requset,Credit)
Member.prototype = Object.assign(Admin.prototype,Requset,Credit,Address)
let admin = new Admin('admin',14)

admin.show()

let lisi = new Member('lisi')
// lisi.getAddress()



//?本身积分和请求没关系，但为了让Admin能用这两个方法，强制让积分和请求加上了关系，怎么解决
//*一般继承都是继承一个