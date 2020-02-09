//JS中绝大多数数据类型都是通过构造函数创建得
let o = {}
console.log(o)
let o = new Object()
o.name = "houdunren"
console.log(o)
let n = new Number(1)
console.log(n+1)
let s = new String('xiangjun')
let s = 'abc'
console.log(s.valueOf())
let b = new Boolean(true)
console.log(typeof b.toString())
console.log(typeof b.valueOf())
function hd(){}
console.log(hd.constructor)//Function
let cms = new hd.constructor('name',`
    this.name = name;
    this.show = function(){
        console.log(this.name)
    }
`)
let xj = new User('xiangjun')
xj.show