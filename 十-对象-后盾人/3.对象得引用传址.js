//对象是个引用类型

let user = {}
let hd = user;
user.name = "xiangjun"
console.log(hd.name) //xiangjun


function show(a){
    console.log(a)
    a=a+100
    console.log(a)//101
}
let a = 1
show(a)
console.log(a)//1

let user={name:'houdunren'}
function show(a){
    a.age = 18
    console.log(18)
}
show(user)
//传对象进去，传的是引用的地址值，所以函数里改变了这个对象，外部的这个对象也被改变了，如果要复制对象，就是对象的复制
console.log(user)//{name:'houxunren',age:18}