
    industry_list = [
  {
     "parent_ind" : "女装",
     "name" : "连衣裙"
  },
  {
     "name": "女装"
  },
  {
     "parent_ind" : "女装",
     "name" : "半身裙"
  },
  {
     "parent_ind" : "女装",
     "name" : "A字裙"
  },
  {
     "name": "数码"
  },
  {
    "parent_ind" : "数码",
     "name": "电脑配件"
  },
  {
    "parent_ind" : "电脑配件",
     "name": "内存"
  },
]

// <!-- 为了取用方便，我们希望可以将其转换为树状格式，例如：
// {
//   "数码": {
//     "电脑配件": {
//         "内存" : {}
//      }
//   },
//   "女装" : {
//      "连衣裙": {},
//     "半身裙": {},
//     "A字裙": {}
//   }
// }
// 实现一个方法完成这个转换
// function convert_format(data) -->



// const res = industry_list.reduce((res,cur,index)=>{
//    if(!cur.parent_ind){
//       res[cur.name]={}
//    }else{
//      Object.keys(res).find(item===)
//    }
//    return res
// },{})
// console.log(res)

function convert_format(data){
   const res={}
  function f(data,d){
   return data.filter((item)=>!item.parent_ind)
  }
//  let first_l=data.filter((item)=>!item.parent_ind)
 if(f(data)){
   data.forEach(item=>{
      res[item.name]={}
   })
 }
//  first_l.forEach(item=>{
//     res[item.name]={}
//  })
 console.log(first_l)

 function f (l1,l2){
    return 
 }
 let sec_l=data.filter(item=>first_l.find(itm=>itm.name===item.parent_ind))
 console.log(sec_l)
 sec_l.forEach(item=>{
   res[item.parent_ind][item.name]={}
})
console.log(res)
let th_l=data.filter(item=>sec_l.find(itm=>itm.name===item.parent_ind))
th_l.forEach(item=>{
   Object.keys()

}
convert_format(industry_list)