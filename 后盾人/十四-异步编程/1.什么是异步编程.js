function a1(cb){
    console.log('111')
    cb()
}
a1(function(){
    console.log('2222')
})

console.log('3333')

function a2(cb){
    setTimeout(() => {
        console.log('after 1 second')
        cb()
    }, 1000);
}

a2(function(){
    console.log('i am a2')
})
console.log(4444)
