//为什么使用面向对象编程，函数编程容易形成复杂得链条式得代码
let user = {}
function add(){

}
function edit(){

}
let article = {}
function add(){

}
//把有关联得封成对象
let name = "xiangjun"
let grade = [{
    name:'js',score:99
},{
    name:'docker',score:89
}]
function average(grade,name){
    let total = grade.reduce((t,l)=>t+l.score,0)
    return `${name}得平均成绩为：${total/grade.lengt}`
}
console.log(average(grade,name))

//这样average就暴露到全局，改成对象得写法
let user = {
    name:'xiangjun',
    grade:[{
            name:'js',score:99
        },{
            name:'docker',score:89
        }],
    average(grade,name){
        let total = grade.reduce((t,l)=>t+l.score,0)
        return `${name}得平均成绩为：${total/grade.lengt}`
        }
    }

}
//现在创建得user是字面量得形式，属性可以存不同类型得值，里面得函数是服务与对象得，称为方法，average,因为都是一类对象里调用，所以可以减少参数得传递
console.log(user)

//average改成
  average(){
        let total = this.grade.reduce((t,l)=>t+l.score,0)
        return `${this.name}得平均成绩为：${total/this.grade.lengt}`
        }
    }
    console.log(user.average())
