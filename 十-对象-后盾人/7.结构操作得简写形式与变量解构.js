//几个简单的语法
let web = {name:'houdunren',url:'houdunren.com'}
let {name,url} = web
console.log(name)

let arr = ['后盾人',"houdunrem.com"]
//*只想取数组中的一个
let [a] = arr
console.log(a)
let [,b] = arr
console.log(b)//就只取后面的了
//只取对象中某一个
let {url} = web
console.log(url)

//两个普通变量
let name = "houdun"
url = "houdun.com"
let opt = {name:name,url:url}
//简写
let opt = {name,url}