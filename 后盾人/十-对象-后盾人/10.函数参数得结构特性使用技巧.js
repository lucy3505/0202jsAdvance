//解构作为函数参数的使用
function hd([name,age]) {
    console.log(name,age)
    
}
hd(['xiangjun',18])
let [name,age] = ['xiangjun',18]
 console.log(name);

 function hd({name,age}) {
    console.log(name,age)
    
}
hd({'xiangjun',18})

//*部分解构
function hd(name,{sex,age}){
    console.log(name,sex,age)
}
hd("xiangjun",{sex:'男',age:18})
 
 //^用a,b接受sex和b
 function hd(name,{sex:a,age:b}){
    console.log(name,a,b)
}
hd("xiangjun",{sex:'男',age:18})