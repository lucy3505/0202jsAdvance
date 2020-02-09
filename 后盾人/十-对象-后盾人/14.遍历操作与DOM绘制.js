//系统提供的api帮我们获取属性和值
let hd = {
    name:'houdun',
    year:'2010'
}
console.log(Object.keys(hd))//获取属性的名字，["name","year"]
console.log(Object.values(hd))//获取对象所有的值 ["houdun","2010"]
console.log(Object.entries(hd))//获得二维数组，属性和值变成一个数组 [["name","houdun"],["year","2010"]]
console.log(JSON.stringfy(Object.entries(hs),null,2))

//*循环 for in
for (const key in hd) {//key就是属性名 hd[key]就是值
    console.log(hd[key])
}
//for of 操做迭代对象的
//*for of 默认不能操作对象，操作数组可以，数组有迭代特性
for (const iterator of hd) {
    console.log(iterator) //报错：hd is not iterable
}
//for of用作于数组是可以的
let lessons = [{
    name:'js',
    click:99
}]
for(const iterator of lessons){
    console.log(iterator)//{ name:'js', click:99}
}

//!
for(const iterator of Object.keys(hd)){
    console.log(iterator)
}

for(const iterator of Object.values(hd)){
    console.log(iterator)
}
//!
for(const [key,value] of Object.entries(hd)){
    console.log(value)
    console.log(key)
}

let lessons = [
    {name:'js', click:99},
    {name:'node', click:88}
]
let ul = document.createElement("ul")
for(const lesson of lessons){
    let li = document.createElement('li')
    li.innerHTML=`课程:${lesson.name},点击数：${lesson.click}`;
    ul.appendChild(li)
}
document.body.appendChild(ul)