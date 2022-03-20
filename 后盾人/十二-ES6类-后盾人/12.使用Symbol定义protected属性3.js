//无法刻意修改属性
// //``方法一：Symbol
// const HOST = Symbol()

// class Common {
//   [HOST] = "https://hdcms.com"//*把属性放到父类中，这样子类也可以用这个属性，受保护的：在类及其子类中可以用，外部不能用
//   //既然属性是在这个类中操作的，那把访问器也放到这个类中
//   set url(url) {
//     if (!/^https?:\/\//i.test(url)) {
//       throw new Error('地址错误')
//     }
//     this[HOST] = url
//   }
//   get url() {
//     return this[HOST]
//   }

// }
// class User extends Common {//*extends就是继承了Common,User就是子类,且同时要在子类的构造函数调一下父类的构造函数，即使父类没有构造函数也要调用一下，否则报错

//   //这个值在当前类及其子类是可以访问的
//   constructor(name) {
//     super()//*调用父类构造函数
//     this.name = name//这些都是开放属性
//   }

// }

// let hd = new User('houdunren')
// hd.name = "lisi"
// hd.url = "http://fdd.com"

// console.log(hd(Symbol()))//undefined

//``如果有多个host,也可以这么来操作
const protecteds = Symbol();
class Common {
  constructor() {
    this[protecteds] = {};
    this[protecteds].host = "https://houdunren.com";
  }
  set url(url) {
    if (!/^https?:\/\//i.test(url)) {
      throw new Error("地址错误");
    }
    this[protecteds].host = url;
  }
  get url() {
    return this[protecteds].host;
  }
}

class User extends Common {
  constructor(name) {
    super();
    this[protecteds].name = name; //把name也压到symbol里,只能在内部取，如果要让外部去，就定一个get name
  }
  get name() {
    return this[protecteds].name;
  }
}

let hd = new User("houdunren");
// hd.url = "htt://fdd.com";
console.log(hd);
// hd[protecteds] = 1;
console.log(hd);
// console.log(hd.host);
