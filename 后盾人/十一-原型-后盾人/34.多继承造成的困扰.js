//多继承做不了 ，会带来问题
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
function Request(){

}

//这时候Admin又想用User又想用Request
// ^这时候Admin已经继承了User.Prototype要再想继承Request的方法，那只能User.prototype去继承Request.prototype
// User.prototype.__proto__=Request.prototype或User.prototype = Object.create(Request.prototype)
extend(Request,Credit)
extend(User,Request)//*子函数原型上的方法要继承函数之后写
User.prototype.show=function(){
    console.log(this.name,this.age)
}
//``有个积分的控制器
function Credit(){

}
Credit.prototype.total=function(){
    console.log('积分统计')
}
//Admin想要使用这个total方法，又要继承，那就只能Request的原型再往上继承

//!下面这个一定要写再extend后面，因为使用Object.create
Request.prototype.ajax=function(){
    console.log('请求后台')
}

function Admin(...args){
    User.apply(this,args)
}
extend(Admin,User)
let admin = new Admin('admin',14)
let usr = new User('user')
let req = new Request('user')
console.log(admin)
console.log(req)
admin.show()
admin.ajax()
admin.total()

//?本身积分和请求没关系，但为了让Admin能用这两个方法，强制让积分和请求加上了关系，怎么解决
//*一般继承都是继承一个