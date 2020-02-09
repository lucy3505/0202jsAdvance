//代理对对象，函数进行拦截，对数组进行拦截的操作
const lessons = [{
    title:'111',
    category:'1111'
},
{
    title:'222',
    category:'2222'
},
{
    title:'333',
    category:'3333'
},
{
    title:'444',
    category:'44444'
}]
// 要求，获取category的时候对里面的title的长度进行截断处理

let proxy = new Proxy(lesson,{
    get(array,key){
        console.log(array)//lessons这个数组
        console.log(key)//key为0  下方传的是0
        const title = array[key].title
        console.log(title)
        const len = 5
        array[key].title=title.length>len?title.substr(0,len)+'.'.repeat(3):title
        return array[key]
    }
})
console.log(proxy[0])