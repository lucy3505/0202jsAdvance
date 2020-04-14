//访问器
//?能用在什么地方
//实现数据的安全过滤

// const user = {
//     name:'houxunren',
//     age:18
// }
//对属性的值进行限制判断
// user.age = 99 


// const user = {
//     data: {
//         age: 10
//     },
//     setAge(value) {
//         if (value < 10) {
//             throw new Error('不能小于5')
//         } else {
//             this.data.age = value
//         }

//     },
//     getAge() {
//         console.log(this.data.age)
//     }
// }

// user.setAge(5)
const DATA = Symbol()
const user = {
    [DATA]: {
        age: 12
    },
    set age(value) {
        if (typeof value !== "number" && value < 10 || value > 100) {
            throw new Error('age is wrong')
        }
        this[DATA].age = value
    },
    get age() {
        return this[DATA].age
    }
}

user.age = 13
console.log(user)
// user[DATA].age = 14
console.log(user)
console.log(user.age)