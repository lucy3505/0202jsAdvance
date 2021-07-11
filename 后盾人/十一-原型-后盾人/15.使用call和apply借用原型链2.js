//如果某个原型链中没有这个功能，另一个原型链上有这个功能，借用别的原型链上的功能

let hd ={
  data: [1,2,3,55,23]
}

Object.setPrototypeOf(hd,{
  max(){
    return this.data.sort((a,b) => b-a)[0]
  }
})

let xj=[1,3,2]
console.log(xj)
xj.data=xj

let m=hd.max.apply(xj)
console.log(m)

let xj2 = {
  l:{score1:22,score2:32,score3:44},
  
  
  get data(){
    return Object.values(this.l)
  }
}
console.log(xj2.data)
// let v = Object.values(xj2)
let m2=hd.max.apply(xj2)
console.log(m2)