//*分配给构造函数的属性称为静态属性

function Web(url) {
  this.url = url
}
Web.url = "hdcms.com"//静态属性
let hd = new Web("houdunren")
console.log(hd)

//类中的静态属性
class Request {
  static host = "https://ddd.com" //如果一个值要给所有对象使用就可以设置成静态属性，像后台的地址是不变的可以设置成静态属性，节约空间
  host = "houdunren.com"
  api(url) {
    return Request.host + `/${url}`
  }
}

let obj = new Request()
console.log(obj)
let obj2 = new Request()
obj2.host = "http://hdcons.com"//不会影响obj
console.log(obj2)
console.log(obj.api('article'))