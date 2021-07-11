//如果某个原型链中没有这个功能，另一个原型链上有这个功能，借用别的原型链上的功能

let hd ={
  data: [1,2,3,55,23]
}

Object.setPrototypeOf(hd,{
  max(...data){
    debugger
    return data.sort((a,b) => b-a)[0]
  }
})


let xj2 = {
  l:{score1:22,score2:32,score3:44},
  
}

let v = Object.values(xj2.l)
debugger
let m2=hd.max.apply(null,v)//用apply传参只能传数组但是进去函数后还变成一个个参数
console.log(m2)