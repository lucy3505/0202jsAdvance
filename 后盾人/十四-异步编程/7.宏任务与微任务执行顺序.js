//js任务的优先级
setTimeout(() => {
    console.log('setTimeout') 
}, 0;
console.log('houdunren')

new Promise((resolve,reject)=>{
    
    resolve()//加到微任务里  同步执行完  再执行这个，再执行宏任务（计时器）
    console.log('prommise')//同步执行的
}).then((value)=>{
    console.log('then')
})

