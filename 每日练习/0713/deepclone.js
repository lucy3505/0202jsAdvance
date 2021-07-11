var obj={a:11,b:{c:22},d:[{a:33},11]}

let res = deepClone(obj)

function deepClone(obj){
  let res = obj instanceof Array?[]:{}

  if(typeof obj === "object"){
    
    for(const key in obj){
      if(typeof obj[key]==="object"){
        res[key] = deepClone(obj[key])
      
      }else{
        res[key]=obj[key]
      }
    }
  }else{
    res = obj
  }


  return res
}


console.log(res)