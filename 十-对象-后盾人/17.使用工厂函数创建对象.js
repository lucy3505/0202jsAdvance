//使用工厂函数创建对象
let xj = {
    name:'xiangjun',
    show(){
        console.log(this.name)
    }
}
let hd = {
    name:'houdun',
    show(){
        console.log(this.name)
    }
}

//一类对象往往处理得动作一样
//?修改一个show内容，就要重复修改几个对象相同得内容，如何改变？
//^方法一：工厂函数
function factory(name,age){
    return{
        name,
        age,
        show(){
            console.log(this.name + `后盾`)
        },
        info(){
            console.log(`${this.name}得年龄是${this.age}`)
        }
    }
}
let xj=factory('xiangjun')
console.log(xj)
let lisi = factory('lisi')
console.log(lisi)

//修改工厂里得函数同时会印象后面得对象