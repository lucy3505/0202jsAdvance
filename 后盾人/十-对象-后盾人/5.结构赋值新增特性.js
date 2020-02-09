//如果说展开语法是对对象或数组的批量处理，那么解构语法就是对元素的解构的分解处理
let user = {name:'houdunren ',age:18}
console.log(user)
let {name:n,age:a} = user//把name放到n里面，age放到a里面
console.log(n)//name的数据
let{name,age}=user //^let {name:name,age:age}的简写
console.log(name,age)

//^因为是声明，所以let 或var或const是要的

function hd(){
    return {name:'xiangjun',age:10}
}

//只要对象是数据，就可以对其进行解构处理
let {name,age} = hd()
console.log((name,age))

//除了返回值，赋值也可以

function user({name,age}){
    //var {name,age} = {name:'xiangjun',age:22}
    console.log(name,age)

}
//*传参也可以用解构的特性
user({name:"xiangjun",age:22})
//这种情况是一般不是人为控制，后端传的时候，就可以在函数参数那里用对象接收

// Math={
//     random:abs
// }
// console.log(Math)
let {random} = Math
console.log(random())
//可以不用全部接受
let user = {name:'houdunren',age:18}
const {name} = user
console.log(name)