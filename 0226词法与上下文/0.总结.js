


//`` 1.js
var value = 1;

function foo() {
  console.log(value);
}

function bar() {
  var value = 2;
  foo();
}

bar();
//?上面这段说明了什么
//* js采用词法作用域，也就是静态作用域。也就是函数在定义的时候作用域就已经确定好了

//* 函数中的函数：要在外部的函数执行的时候，内部的那个函数才会被定义。如果外面的函数不执行，那么内部的函数不会被声明


//`` 2.js
JS引擎是一段一段得分析执行，不是一行一行执行
变量声明提升与函数声明提升
JS引擎执行下面3种代码的时候，会做“准备工作（也就是执行上下文）”
1.全局代码
2.函数代码
3.eval代码
并且用执行上下文栈进行管理

JS一开始遇到的就是全局代码，所以一开始初始化全局代码

//``3.js
打开浏览器就创建了全局对象
开始执行全局代码
执行代码分两个阶段：分析和执行

1）要有变量对象：变量和函数声明。（对于全局代码：变量对象就是全局对象，已经预定义了）
对于函数执行后的上下文来说，变量对象又叫AO

//执行函数时：2步：分析和执行

// 举个例子：

function foo(a) {
  var b = 2;
  function c() { }
  var d = function () { };

  b = 3;

}

foo(1);
//? 在进入执行上下文后，这时候的 AO 是：
AO = {
  arguments: {
    0: 1,
    length: 1
  },
  a: 1,
  b: undefined,
  c: reference to function c(){ },
d: undefined
}
//? 代码执行后的AO
AO = {
  arguments: {
    0: 1,
    length: 1
  },
  a: 1,
  b: 2,
  c: reference to function c(){ },
d: reference to function d() { }
}

//^ 全局上下文的变量对象初始化是全局对象

//^ 函数上下文的变量对象初始化只包括 Arguments 对象

// 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值

// 在代码执行阶段，会再次修改变量对象的属性值
在进入执行上下文时，//!首先会处理函数声明，其次会处理变量声明，如果如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。

//``4 作用域链
函数定义的时候，函数的作用域就决定好了

// 举个例子：
function foo() {
  function bar() {
        ...
  }
}

foo的作用域为:
foo.[[scope]] = [
  globalContext.VO
]
bar.[[scope]] = [
  foo.AO,
  globalContext.VO
]

//^ 当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。

// 这时候执行上下文的作用域链，我们命名为 Scope：

Scope = [AO].concat([[Scope]]);
