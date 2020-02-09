//对象的复制:浅拷贝，对象里的值是普通值，而不是对象的时候
let hd = {name:"后盾人"}
let cms = hd
cms.name = "houdunren.com"
console.log(hd) //hd的那么被改变了
//^方法一:重新shengm
let cms = {
    name:hd.name
}
console.log(cms)
cms.name="sina.com"

//?如果有多个属性，要复制就不够灵活  
//^一：循环方式
let hd = {name:'houdunren',ulr:'houdun.com'}
let obj = {}
for (const key in hd) {
   obj[key] = hd[key]
}
obj.name = "yahoo"
console.log(obj)

//^二：提供的接口:Object.assign()  更简单
let obj = Object.assign({},hd)//把对象压入新的空对象
console.log(obj)
obj.name="tom"

//^三：使用展开语法
//花括号代表开辟了新的内存空间
let obj = {...hd}
obj.name="chrome"
console.log(obj)

//多对象复制合并可以使用Object.assign,单纯复制对象可以使用{...obj}
//如果复制过程中有所改变，可以使用for in
for (const key in hd) {
   obj[key] = hd[key] +'xiangjun'
}