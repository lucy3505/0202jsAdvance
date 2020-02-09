//学习操作对象属性

let user={
    name:'xiangjun',
    "my age":18
}
console.log(user.name)
console.log(object['name'])
console.log(user.my age)//报错
console.log(user['my age'])
//.语法比较普遍

for (const key in user) {//遍历属性
    console.log(user[key])//这里也不能用user.key  用到[]
    
}
//动态添加属性
user.age = 19
user.get = function(){
    return `${this.name}得年龄是${this.age}`
}
console.log(user.get())
//删除属性
delete user.age
console.log(user.get())//this.age为undefined