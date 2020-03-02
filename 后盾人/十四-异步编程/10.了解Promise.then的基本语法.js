new Promise((resolve, reject) => {
    resolve('111')
}).then()//这里不处理也就向后传递给下面的then，如果这里处理了状态，状态就会向后传递
.then(null,
,reason=>{
    console.log(reason)
})
