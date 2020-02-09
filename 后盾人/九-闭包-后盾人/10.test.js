let arr = [2,33,3,5,6,3]
let hd =arr.filter(item=>item>5&&item<10)

let hd2 = arr.filter(between(5,10))
function between(a,b){
    return function(item){
        return item>a&&item<b
    }
}
hd = arr.filter(between(6,10))


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

function arrange(a,b,property="price"){
    return function(item){
        return item[property]>a
    }
}
lessons.filter(item=>item['price']>20)
lessons.filter(arrange(10,30))