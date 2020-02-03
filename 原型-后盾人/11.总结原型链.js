

let arr = [] //new Array
//Array有个父亲prototype,prototype也有个父亲：Object.prototype,Object.prototype的父亲是null，到头了
console.log(arr.__proto__)//这个方式找原型是非标准的
//下面这个方法也能找原型
console.log(Object.getPrototypeOf(arr).__proto__==Object.prototype)//true
console.log(Object.prototype.__proto__)

let a = {name:'a'}
//给b添加方法就会影响它里面的子集，影响下一辈
let b = {name:'b',
show(){
    console.log(this.name)
},
view(){
    console.log('view method')
}
}

let c = {
    name:'c'
}


//*既然prototype是个对象，那按理说每个对象都能成为prototype
Object.setPrototypeOf(a,b)

//c继承b
Object.setPrototypeOf(c,b)
//*这时候a的父级就被改变了，改成了b，再往上找就是object.prototype了，这就叫原型链
console.log(a)
//a继承了b的方法
//把公用的放到父级，让子集随便使用
//这是js里原型继承的体现形式
a.show()
c.show()
a.view()
c.view()