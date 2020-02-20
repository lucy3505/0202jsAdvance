//属性的保护
//1.名字上的约定
class User {
  //public
  site = "后盾人"//这些都是开放属性
  _url = "https://hdcms.com"//*人为约定不能改，能改
  constructor(name) {
    this.name = name//这些都是开放属性
  }
  set url(url) {
    if (!/^https?:\/\//i.test(url)) {
      throw new Error('地址错误')
    }
    this._url = url
  }
}

let hd = new User('houdunren')
hd.name = "lisi"
hd.url = "http://fdd.com"
hd._url = "fds.com"
console.log(hd)