
function  deepClone(obj) {
    var newObj = obj instanceof Array? []: {}
    if(typeof obj === "object"){
        for (const [k,v] of Object.entries(obj)){
            if(obj.hasOwnProperty(k)){
                if(typeof v === "object"){
                    newObj[k] = deepClone(v)
                }else{
                    newObj[k] = v
                }
            }
        }
    }
        return newObj
}
var a11 = deepClone({a:1})