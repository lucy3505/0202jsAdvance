

 let hd  = {}
 console.log(hd.__proto__==Object.prototype)//true

 let arr = [] //new Array
 console.log(arr.__proto__==Array.protptype)//true
 let str = ''//new String
 console.log(str.__proto__==String.prototype)

 let reg = /a/i //new RegExp
 console.log(reg.__proto__==RegExp.prototype)

 let obj={} //new Object
 console.log(obj.__proto__==Object.prototype)

 //*说明构造函数在创建的时候会有个原生对象，通过这个构造函数生成的对象会自动地把它地原型设为这个构造函数的prototype
