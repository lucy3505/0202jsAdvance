function deepClone(obj){
  var newObj = obj instanceof Array?[]:{}
  if(typeof obj==="object"){
      for(const k in obj){
          if(obj.hasOwnProperty(k)){
              newObj[k]=(typeof obj[k]==="object")?deepClone(obj[k]) : obj[k]
          }
      }
  }
  return newObj
}