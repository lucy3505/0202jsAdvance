// 捋一捋
// 以下面的例子为例，结合着之前讲的变量对象和执行上下文栈，我们来总结一下函数执行上下文中作用域链和变量对象的创建过程：

var scope = "global scope";
function checkscope() {
  var scope2 = 'local scope';
  return scope2;
}
checkscope();
//? 执行过程如下：
1.定义阶段就确认了作用域
checkscope.[[scope]] = [
  globalContext.VO
]
//2执行阶段，把函数压入执行栈
ECStack = [
  checkscopeContext,
  globalContext
]
//3.解析函数，先做准备工作，复制函数scope属性创建作用域链
checkscopeContext = {
  Scope: checkscope.[[scope]]
}
//3.1 用arguments创建活动对象，随后初始化，加入形参，变量声明和函数声明
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: undefined
  }
}
//3.2将活动对象压入作用域链顶端
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: undefined
  },
  Scope: [AO, [[scope]]]
}

//4.准备完成后，执行函数，修改AO属性值
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: 'local scope'
  },
  Scope: [AO, [[scope]]]
}
//5 查找scope2的值，返回后函数执行完毕，函数从执行栈中弹出
ECStack = [
  globalContext
]