/* 
    ?究竟是什么生成了一个新的气泡？只有函数会生成新的气泡吗？js中的其他结构能生成作用域气泡吗？
``最常见的答案是js具有基于函数的作用域，意味着每声明一个函数都会为其创建一个气泡，而其他结构都不会创建作用域气泡。
但事实并不完全正确。

``隐藏内部实现
对函数的传统认知就是先声明一个函数，然后再向里面添加代码。但反过来想：从所写的代码中挑选出一个任意的片段，然后用函数声明对它进行包装，实际上就是把这些代码“隐藏”起来。
可以把变量和函数包裹在一个函数的作用域中，然后用这个作用域来“隐藏”他们。

``1.全局命名空间
    当程序中加载了多个第三方库时，如果他们没有妥善地将内部私有的函数或变量隐藏起来，就会很容易引发冲突。
    这些库通常会在全局作用域中声明一个名字足够独特的变量，通常是一个对象。这个对象被用作库的命名空间，所有需要暴露给外界的功能能都会成为这个对象（命名空间）的属性，而不是将自己的标识符暴露在顶级的词法作用域中。
    例如：

 */
 var MyReallyCoolLibrary={
     awesome:'stuff',
     doSomething:function(){
         //..
     },
     doAntherthing:function(){
         //..
     }
 }
 /* 
 ``2.模块管理
 另一个规避冲突的办法和现代的模块机制很接近，就是从众多模块管理器中挑选一个来使用。使用这些工具，任何库都无需将标识符加入到全局作用域中，而是通过依赖管理器的机制将库的标识符显示地导入到另外一个特定的作用域中。

^包装函数的声明以(function...而不是以function...开始，尽管看上去并不是个显眼的细节，但实际上却是非常重要的区别，函数会被当做函数表达式而不是一个标准的函数声明来处理
 *如果function是声明中的第一个词，那么就是一个函数声明，否则就是一个函数表达式
 函数声明和函数表达式之间最重要的区别是他们的名称标识符将会绑定在何处。
 (function foo(){..})作为函数表达式意味着foo只能在..所代表的位置中被访问，外部作用域则不行。foo变量名被隐藏在自身中意味着不会非必要地污染外部作用域


 ``匿名和具名
 对于函数表达式最熟悉地场景可能就是回调函数了，例如：
 setTimeout(function(){
     console.log('waiting')
     },1000)

 ^这叫匿名函数表达式，因为function()...没有名称标识符。//!函数表达式可以是匿名地，而函数声明不可以省略函数名，否则报错。
 匿名函数也有几个缺点：
 1.
 2.
 3.
 ^行内函数表达式非常强大且有用————匿名和剧名之间的区别并不会对这点由任何影响。给函数表达式指定一个函数名可以有效解决匿名函数的缺点。
 始终给函数表达式命名时一个最大实践
 setTimeout(function timeouthandler(){
     console.log('111')
 },1000)


 ``立即执行函数表达式：IIFE
 var a = 2
 (function foo(){
     var a = 3
     console.log(a) //3
 })()
 console.log(a) //2
 由于函数被包含在一对（）括号内部，因此成为了一个表达式，通过在末尾加上一个()可以立即执行这个函数。这种叫做IIFE
 函数名对IIFE当然不是必须的，IIFE最常见的用法是使用一个匿名函数表达式。
 ^相较于传统的IIFE形式，很多人更喜欢另一个改进的形式：(function(){}())
 这两种形式功能上完全一致，全凭喜好。
 ?IIFE另一个普遍的进阶用法？传参
 把他们当函数调用并传递参数进去
 var a = 2
 (function IIFE(global){
     var a = 3
     console.log(a);
 })(window)
 console.log(a)
 ``另一个应用场景是解决undefined标识符的默认值被错误覆盖导致的异常(虽然不常见)。
 将一个参数命名为undefined,但是对应的位置不传入任何值，这样就可以保证在代码块中undefined标识符的值真的是undefined:
 undefined = true//给其他代码挖了一个大坑！绝对不要这样做
 (function IIFE(undefined){
     var a;
     if(a===undfined){
         console.log('undefined is safe here')
     }
 })()
 ``还有一种变化的用途是倒置代码的顺序，将需要运行的函数放在第二位，在IIFE执行之后当作参数传递进去。这种模式在UMD(univeral Module Definition)项目中被广泛使用。
 var a = 2;
 (function IIFE(def){
     def(window)
 })(function def(global){
     var a = 3;
     console.log( a ); //3
     console.log(global.a)
 })
 

 ``块作用域
 当使用var声明变量时，它写在哪里都是一样的，因为他们最终都会属于外部作用域
 ^1. for(var i=0;i<12;i++){}
 ^2. if(foo===1){
     var bar=foo*2
    }
^3.with
^4 try/catch

``let
let关键字可以将变量绑定到所在的任意作用域中，（通常是{ .. }内部）。换句话说，let为其声明的变量隐式地劫持了所在的块作用域
  */