//构造函数的环境体现形式
function Hd(){
    let n = 1;
    this.sum = function(){
        console.log(++n)
    }
}
let a = new Hd()
console.log(a)//!a里面有个属性sum，它的值就是sum这个函数，说明这个sum在被外面所使用，只要这个函数被使用，那么这个函数同作用域下的数据就会被保留，所以如下：
a.sum()//2
a.sum()//3

//分析如下:可以像下面那样理解
function Hd(){
    let n = 1;
    function(){
        console.log(++n)
    }
    return {
        sum:sum
    }
}

let a = new Hd()
console.log(a)
let  b=Hd()
b.sum()//2