//访问器
//?能用在什么地方
//实现数据的安全过滤

const user = {
    name:'houxunren',
    age:18
}
//对属性的值进行限制判断
// user.age = 99 

const user = {
    data:{name:"houdunren",age:18},
    // setAge(value){ //定义一个方法
    //     if(typeof value !=="number" &&value<10&&value>100)
    //     throw new Error('年龄格式错误')
    // }
    set age(value){ //使用访问器，效果和setAge一样
    console.log('run ..')
        if(typeof value !=="number" &&value<10&&value>100){
            throw new Error('年龄格式错误')
        }
        this.data.age = value
        
    },
    get age(){
        return this.data.age + '岁'
    }
    
}

// user.setAge(999)//报错
user.age = 999//直接进入set age