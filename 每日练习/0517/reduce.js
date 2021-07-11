Array.prototype.myReduce=function(func,t){
    if(!this instanceof Array){
        throw new Error('wrong type')
    }
    // t = t || this[0]
    console.log(arguments)
    if(arguments.length===2){
       t=arguments[1] 
    }else{
        t=this[0]
    }
    
    var o = this
    var l = this.length
    var i = -1
    // var t = 0
    while(++i < l){
        t = func(t,o[i])
    }
    return t
}



res=[1,2,3,4].myReduce((total,item)=>{
    return total+=item
},0)
console.log(res)