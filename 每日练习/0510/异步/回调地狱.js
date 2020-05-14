function fn(cb){
    setTimeout(() => {
        cb()
        setTimeout(()=>{
            fn2()
            setTimeout(()=>{
                fn3()
            },2000)
        },1000)
    }, 1000);
}

function settimeout(delay){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,1000)
    })
}
