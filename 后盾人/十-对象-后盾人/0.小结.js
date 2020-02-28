
// 3.对象是引用类型传值
// ``函数传参如果传的是对象，那么在函数内部如果改变了对象，那么外部的对象也被改变了

//4.展开语法传参 ...

//5.解构赋值
function user({ name, user }) {
  console.log(name, user);
}
//*传参也可以用解构的特性
user({ name: "xiangjun", age: 22 })
//这种情况是一般不是人为控制，后端传的时候，就可以在函数参数那里用对象接收

let user = { name: 'houdunren ', age: 18 }
console.log(user)
let { name: n, age: a } = user//把name放到n里面，age放到a里面

let arr = ['后盾人', "houdunrem.com"]
//*只想取数组中的一个
let [a] = arr
console.log(a)
let [, b] = arr
console.log(b)//就只取后面的了
//只取对象中某一个
let { url } = web
console.log(url)

//多层对象解构
let { name, lesson: { title } } = hd
console.log(name, title)


//20.对象的封装
//*对构造函数进行的抽象处理，要让外部访问就给属性加this，不想让外部访问的就用变量声明

//26 使用访问器实现数据得安全过滤（get，set)
//27 使用访问器伪造属性

//28.使用访问器设置属性

//15.浅拷贝
//*多对象复制合并可以使用Object.assign,单纯复制对象可以使用{...obj}
//*如果复制过程中有所改变，可以使用for in

//16.深拷贝
