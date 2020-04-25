//对象属性参与运算
let hd = {}
let name ='title'
hd[name] = "后盾人" //会参与表达式的运算
console.log(hd.title)
let id = 0
let hd = {}
//属性是通过计算之后得到的
hd[`id-${++id}`] = id
hd[`id-${++id}`] = id
hd[`id-${++id}`] = id
hd[`id-${++id}`] = id
console.log(hd)

//有时候需要对数据解构进行处理，来改变属性
//?数组结构的改成对象结构
let lessons = [{
    title:'11',
    category:'111'
},
{
    title:'22',
    category:'222'
},
{
    title:'33',
    category:'3333'
},
{
    title:'44',
    category:'4444'
}
]
//把lessons改成{
//   '0':{
//     title:'11',
//     category:'111'
// },
// {
//     title:'22',
//     category:'222'
// },
// {
//     title:'33',
//     category:'3333'
// },
// {
//     title:'44',
//     category:'4444'
// }
// }
let res = lessons.reduce((obj,cur,index)=>{
    obj[`${cur['category']}-${index + 1} `] = cur;
    return obj
},{})
console.log(res)
//使用JSON打印，null为保留所有属性，2代表tab键为2
console.log(JSON.stringfy(res,null,2))

//*Object.assign方法:把两个对象进行合并
let hd = Object.assign({a:1},{b:2})
console.log(hd) //{a:1,b:2}
//也可以用于参数
function upload(params){
    let options = {
        size:999
    }
    options = Object.assign(options,params)
    console.log(JSON.stringfy(options,null,2))
}
upload({size:99,tyoe:"jpeg"})

//*以往没这些功能的时候会使用第三方库
//jQuery.extend() lodash