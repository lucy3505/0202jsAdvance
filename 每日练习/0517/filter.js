

Array.prototype.myFilter=function(fn){

    var o = this
    var l = this.length
    console.log(l)
    var i=-1
    var arr = []
    while(++i<l){

        if(fn(o[i])){

            arr.push(o[i])
            }
    }
    return arr
}



var arr = [1,2,3,4,5,6]
arr.filter((item)=>item<3)
console.log(arr.myFilter((item)=>item<3))