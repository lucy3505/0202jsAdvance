//代理不仅可对对象进行控制，对函数也能进行控制
function factorial(num){
    return num ===1?1:num*factorial(num-1)
}
let proxy = new Proxy(factorial,{
    apply(func,obj,args){//通过代理访问的时候就会访问这个方法，func代表这个函数，obj代表上下文对象this,args为参数
        console.log(func)//factorial这个函数的表达式
        console.log(args)//[5]
        console.log(obj)//undefined
    }
})
proxy(5)
proxy.apply(this,[5])//这时候obj就是window,args = [5]

//例子：通过代理看下factorial阶乘执行的时间
function factorial(num){
    return num ===1?1:num*factorial(num-1)
}
let proxy = new Proxy(factorial,{
    apply(func,obj,args){
        console.time('run')
        func.apply(this,args)
        console.timeEnd('run')
    }
})

proxy.apply({},[1000])