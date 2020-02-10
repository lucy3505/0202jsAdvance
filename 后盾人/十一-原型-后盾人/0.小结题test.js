

// let hd = {name:'hd'}
// let parent = {
//     name:'parent',
//     show(){
//         console.log('parent method' + this.name)
//     }
// }
// hd.__proto__=parent
// hd.show()//parent method hd

//15


let hd = {
    data: [1, 2, 3, 4, 5]
}
Object.setPrototypeOf(hd, {
    max(data) {
        return data.sort((a, b) => b - a)[0]
    }
})
console.log(hd.max(hd.data))//使用传参的话，对象里就不限制一定要有什么属性
let xj = {
    lessons: { js: 87, php: 66, Linux: 22, node: 99 },
}
// hd.max.apply(null,Object.values(xj.lessons))//apply的第一个参数是对象，this
//apply的this为null的话  写成函数调用就可以
hd.max(Object.values(xj.lessons))
