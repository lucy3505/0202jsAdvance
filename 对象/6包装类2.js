//包装类得过程 var a =124 console.log(a.str)
a.len=3//照理说原始值是没有属性得，应该不能去设置属性值，但是你是客户你最大，系统自动帮你new
Number(123) 是看到.len才去做new
Number这件事,但是我没法保存你这个对象，所以就删除了 new Number(123).len=2
console.dir(a) console.log(a.len)//undefined 系统看到.len 就去自动帮你new
Number(a)去找.len var str = 'abc' console.log(str.length) //如果我们把new
Number()保存起来 那么就是个对象就可以设置属性 //
那么str有length这个属性怎么理解？ //str是原始值，就是没有属性和方法得
//系统看到. 就去new String //说明系统得String构造函数里内置了length属性
console.log(new String(str).length) console.log(new String())//值是''
对象里面有length属性 console.log(new Number())//值是0 里面没有length属性
