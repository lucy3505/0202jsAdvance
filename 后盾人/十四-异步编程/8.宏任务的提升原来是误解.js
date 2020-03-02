let promise = new Promise(resolve=>{
    // resolve()
    setTimeout(() => {//这里就是执行了宏任务，才生成微任务
        resolve()
    }, 0);
}).then(value=>{
    console.log('success')
})