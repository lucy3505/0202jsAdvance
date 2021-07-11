function cloneDeep(obj){
    var res = obj instanceof Array?[]:{}
    if(typeof obj === "object"){
        for(const key in obj){
            if(obj.hasOwnProperty(key)){
                if(typeof obj[key]==="object"){
                    res[key]=cloneDeep(obj[key])
                }else{
                    res[key]=obj[key]
                }
            }
        }
    }
    return res
}
res = cloneDeep({a:1,b:{c:'c'},d:[1]})
console.log(res)