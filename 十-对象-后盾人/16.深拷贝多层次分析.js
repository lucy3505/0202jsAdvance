let obj = {
    name:'hodun',
    user:{
        name:'hdcms'
    }
}
let hd = {
    name:obj.name,//值得复制
    user:obj.user //这里是对象，对象传递的是引用类型，只是把地址给
}
hd.name = "xiangjun"//只有hd变了
hd.user.name = "湘军"//obj和hd都变了
console.log(JSON.stringfy(obj,null,2))
console.log(JSON.stringfy(hd,null,2))

//*深拷贝：一层层处理，想到递归
let data = {
    name:'hodun',
    user:{
        name:'hdcms'
    }
}
function copy(object){
    let res = {} //!
    for(let key in object ){
        res[key] = typeof object[key]=='object' ? copy(object[key]):object[key]
    }
    return res
}
let hd = copy(data)
console.log(JSON.stringify(hd,null,2))
console.log(JSON.stringify(data,null,2))

copy(data)

//*深拷贝：复杂数据结构遍历（数组）
let data = {
    name:'hodun',
    user:{
        name:'hdcms'
    },
    arr: []//typeof data['arr']=='object,经过上面得copy会变成{},所以typeof object[key]=='object'要变化
}
console.log([] instanceof Array)//true
console.log({} instanceof Array)//false
function copy(obj){
    let res = obj instanceof Array?[]:{}
    //?有一种方式是使对象和数组在遍历得时候结构是一样的
    for(let [k,v] of Object.entries(obj) ){
       res[k] = typeof v =="object"?copy(v):v
    }
    return res
}

let hd = copy(data)
hd.arr.push('abc')
console.log(JSON.stringify(hd,null,2))
console.log(JSON.stringify(data,null,2))

copy(data)
