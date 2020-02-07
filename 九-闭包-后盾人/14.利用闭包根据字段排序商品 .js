//排序

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

let hd = lessons.sort(function(a,b){
    return a.price > b.price?1:-1
})
console.log(a)
//如果要变降序又要重新写，这时候就写个函数
function order(field = "price",type="asc"){
    return function(a,b){
        if(type ==="asc") return a[field] >b[field]?1:-1
        return a[field] >b[field]?-1:1
    }
}
let hd = lessons.sort(order('click',"desc"))