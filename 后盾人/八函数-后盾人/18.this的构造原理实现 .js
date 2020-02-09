//apply call bind
//起初这个this是空得：{}
//new得时候就在里面开始加工，加工得过程就是根据我们传递得参数,传了个lisi  就变成了{name:'lisi'}
//加工完之后会把加工得结果返回给我们
//*this本来是空得，通过构造之后会产生出一个对象，所以this是可以改变得
//^
function User(name){
    this.name = name
    // return {a:'houdun.com'}
}
let lisi = new User('lisi')

let hdcms = {url:'hscms.com'}
//调用构造工厂，也就是构造函数，使用call方法来调用，第一个参数就是你要改变得this,这时候你构造得时候this就不是空得了，而是hdcms这个对象，第二个参数就会传给function User(name)得name这个参数,//!所以此时的话User里的this就是在改变hdcms
User.call(hdcms,'kayuanduixiang')
console.log(hdcms)//{url:'hscms.com',name:'kayuanduixiang'}