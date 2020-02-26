//15.对象浅拷贝:对象里的值是普通值，而不是对象（地址值）
let md = {
  hd1:{hd3:'houdun1'},
  hd2:{hd4:'houdun2'}
}

let obj = {}
function  repeat(hd,obj) {
   if(typeof hd!=='object'){
      // obj= hd
      return
   }else{
     for(const key in hd){
      
       if(typeof hd[key]==='object'){
          obj[key]={}
       }else{
         obj[key]=hd[key]
       }
       repeat(hd[key],obj[key])
     }
   }
  // for(const key in hd){
  //   if(typeof hd[key]==='object']){
  //     obj[key] = hd[key]
  //   }else{
  //     obj[key]={}
  //     repeat(hd[key],obj)
  //   }
  // }
}
repeat(md,obj)
console.log(obj)