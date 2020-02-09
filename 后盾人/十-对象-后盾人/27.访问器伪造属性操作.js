//使用访问器伪造属性
"user strict"
let lesson = {
    lists: [ 
        {name:'js',price:100},
        {name:'node',price:200},
        {name:'vuejs',price:300},
    ],
    get total(){
        return this.lists.reduce((t,l)=>t+l.price,0)
    }
}
console.log(Lesson.total)//通过属性就获取课程总价
Lesson.total = 900
console.log(Lesson.total)//*不会得到900，因为无法修改，没有这个属性，使用strict模式下就会报错
