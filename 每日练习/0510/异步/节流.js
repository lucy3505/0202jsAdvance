function throttle(cb,delay){
    let start = 0
    return function(){
        let res = new Date()
        if(res-start>delay){
            cb.apply(this,arguments)
            start = res
        }
    }
}

el.onclick=function(){

}

function fn(){
    console.log('click')
}
el.onclick = throttle(fn,1000)
//用promise
function throttle(delay){
    return new Promise((resolve,reject)=>{
        return function(){
        let res = new Date()
        if(res-start>delay){
            this.resolve(this,)
            cb.apply(this,arguments)
            start = res
        }
    }
    })
}

el.onclick=throttle(1000).then((res)=>{
    function (){
        
    }
})