
//*深拷贝：一层层处理，想到递归
let data = {
    name:'hodun',
    user:{
        name:'hdcms'
    }
}
function copy(object){
    let res = {}
    for(let key in object ){
       res[key]= typeof object[key]=='object'?copy(object[key]):object[key]
    }
    return res
}

copy(data)

//更复杂点得数据结构
let data = {
    name:'hodun',
    user:{
        name:'hdcms'
    },
    arr:[]
}
function copy(object){
    let res = {}
    for(let key in object ){
       res[key]= typeof object[key]=='object'?copy(object[key]):object[key]
    }
    return res
}

copy(data)

