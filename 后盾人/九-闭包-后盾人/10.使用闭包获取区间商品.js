//加深闭包理解
let arr = [1,23,3,4,3,2,3,22]
let hd = arr.filter(function(v){
    return v >= 2 && v <= 9 
})
console.log(hd)
let a = arr.filter(function(v){
    return v >= 6 && v <= 10
})
console.log(a)

//?写成一个方法
let between=function(a,b) {
    return function (v){
        return v >= a && v<= b
    }
}
let b = arr.filter(between(10,20))

let lessons = [{
    title:'11',
    click:11,
    price:111
},{
    title:'22',
    click:22,
    price:222
},{
    title:'33',
    click:33,
    price:333
},{
    title:'44',
    click:44,
    price:444
}]
function between(a,b){
    return function(v){
        return v.price>=a && v.price<=b
    }
}
console.log(lessons.filter(between(3,9)))