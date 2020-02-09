//!原型是我们的父一级，或者说是长辈
//可以有多个长辈
let hd = {}
console.dir(hd)//就一个长辈，长辈的功能可以拿来用

//前面说，JS中绝大多数都是对象
// 比如说 new String new Number new Boolean new RegExp

function User(){}
//函数比较特殊，有使用当对象使用，有时候当构造函数使用
//User.apply   函数也是对象。使用了User.__proto__上的方法apply。这个就是当对象使用
//有时候当构造函数使用
// let hd = new User()
console.dir(User)
//点开后有__proto__，还有一个prototype属性，这也是长辈
//这两个长辈使用的场景不一样

User.prototype.show = function(){
    console.log('houdunrren')
}
//如果把这函数当作构造函数，比如
let hd = new User()//用构造函数造出来的对象
hd.show()
console.log(User.prototype === hd.__proto__)//true
/* 
解释：User里面有个父级原型prototype(User.prototype)
新创建的hd对象，会自动为hd对象指定一个原型，对象默认情况下都有原型，把原型指向了构造函数的prototype,和构造函数使用的是同一个原型。

 */

 //User还有一个原型对象，是它专属的。User.__proto__
 //把User当函数对象的时候就使用User.__proto__
 User.__proto__.view=function(){
     console.log('User function view metohd')
 }
 User.view()

//  !总结：User函数里有两个长辈.prototype和__protp__,把User当函数对象的使用时使用__proto__,服务于函数对象的。prototype服务于函数实例化对象的。这两个是服务不同场景的
