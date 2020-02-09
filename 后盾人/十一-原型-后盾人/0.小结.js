
//``对象有一个属性来记录它的原型或者说父亲，通过__proto__能找到它的长辈

//^5
//原型是我们的父一级，或者说是长辈，普通对象就一个长辈__proto__
//!可以有多个长辈(函数)

//*JS中绝大多数数据都是对象
// 比如说 new String new Number new Boolean new RegExp

function User(){}
//函数比较特殊，有使用当对象使用，有时候当构造函数使用
//有时候当构造函数使用
// let hd = new User()
console.dir(User)
//``点开后有__proto__，还有一个prototype属性，这也是长辈
//*这两个长辈使用的场景不一样

//!函数有两个原型：__proto__和prototype，
//当new出一个对象，这个对象得原型指向构造函数得原型(prototype),构造函数和new出来得对象使用同一个原型
//*函数得专属原型__proto__
//prototype原型是和new 出来得对象共用得
//!小结：把User当函数对象的使用时使用__proto__,服务于函数对象的。prototype服务于函数实例化对象的。这两个是服务不同场景的

//! 构造函数两个原型得原型都指向Object.prototype

//*设置原型得方法：Object.setPrototypeOf(obj,parent)
//*查看原型得方法:Object.getPrototypeOf(obj)

//通过prototype找到构造函数---constructor
User.prototype.constructor

//9.
//往prototype添加方法，使用prototype.fn=function(){}并不会改变本身得prototype，本来得prototype里有个constructor属性，如果使用User.prototype={},往里面添加多个方法，这时候就是把prototype这个对象完全改变了，那么里面得constructor也不见了，要把constructor加回去,prototype={constructor:User},否则下面方法用不了let lisi = hd.__proto__.constuctor('lisi')

//11
//*既然prototype是个对象，那按理说每个对象都能成为prototyp
Object.setPrototypeOf(a,b)