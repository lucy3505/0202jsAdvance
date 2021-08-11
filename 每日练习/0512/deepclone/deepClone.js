function deepClone(obj){
    // return obj
    let res = obj instanceof Array?[]:{}
    // for (const [k,v]  of Object.entries(obj)){
    //     res[k]
    // }
    Object.keys(obj).forEach(key=>{
        res[key]=obj[key]
       if(typeof obj[key]!=='object'){
        res[key]=obj[key]
       }else{
        res[key]= deepClone(obj[key])
       }
    })
    return res
}

const obj={a:1,b:2,c:{aa:'q',bb:'w'},d:{d1:[1,2,{a:111}],d2:{dd:22}}}

const obj2 = deepClone(obj)

console.log(obj2)