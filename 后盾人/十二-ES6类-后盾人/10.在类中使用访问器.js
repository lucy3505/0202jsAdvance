//访问器
class Request {
  constructor(host) {
    this._host = host
    this.data = { host }
    this.host = host//这里赋值也会走相面访问器host的方法
  }
  // setUrl(url){
  //   if(!/^https?:\/\//i.test(url)){
  //     throw new Error('地址错误')
  //   }
  //   this.url = url
  // }
  set host(url) { //这样写的时候会死循环，要把constructor里的属性名为host换个名称
    if (!/^https?:\/\//i.test(url)) {
      throw new Error('地址错误')
    }
    // this.host = url
    this.data.host = url//!这里赋值不可以等于函数名  例如this.host = host
  }
}
let hd = new Request("http://www.houdunren.com")
hd.host = "hdcms.com"
// hd.setUrl('https://fff.com')
console.log(hd)