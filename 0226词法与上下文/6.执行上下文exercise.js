


// 讲讲执行上下文的具体处理过程。
var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f();
}
checkscope();
//1.定义阶段确认作用域,全局里的变量对象
checkscope.[[scope]] = [globalContext.VO]

//2.执行阶段，把函数压入执行栈
ECStack = [
  checkscopeContext,
  globalContext
]
//3.1函数初始化解析，创建AO
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope: undefined,
    f: reference to function f
  }
}
//3.1.1  定义f的作用域
f.[[scope]] = [checkscopeContext.AO, globalContext.VO]


//3.2把AO压入作用域的顶端
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope: undefined,
    f: reference to function f
  }，
  scope: [AO, [[scope]]]
}
//4执行函数，修改AO属性值
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope: 'local scope'
    f:
  },
  Scope: [AO, [[scope]]]
}
//5 执行函数f,将函数f压入执行栈
ECStack = [fContext, checkscopeContext, globalContext]
//5.1 根据arguments初始化fContext
fContext = {
  AO: {
    arguments: {
      length: 0
    },
  },
  Scope: [AO, [[scope]]]
}
//5.2把f的AO压入f的scope的顶端f
Context = {
  AO: {
    arguments: {
      length: 0
    },
  },
  Scope: [AO, [[scope]]]
}
//6 执行f,修改f的AO值
Context = {
  AO: {
    arguments: {
      length: 0
    },
  },
  Scope: [AO, [[scope]]]
}
//7.返回scope的值，弹出执行栈
ECStack = [checkscope, globalContext]
//8 执行完毕checkscopeContext，弹出执行栈
ECStack = [globalContext]