hd()

  //?html引入了两个js文件，里面的函数名都相同，这时候执行函数名是执行那个
  // 执行后一个js文件，如何解决？
  /* 
  现在解决都是用模块化，早期的话呢？
  写一个立即执行函数
  */
  (function () {
    console.log(222)
  })()
  //把4.2.js文件修改成
  (
    function () {
      function hd() {
        console.log('js4.2')
      }

      function show() {
        console.log('js4.2')
      }
    }
  )()
  //这里面的函数就不是全局的了，有作用域的概念
  // 这时候4.2就不是全局的了，这时候怎么去那4.2里面的东西呢
  (
    function (window) {
      function hd() {
        console.log('js4.2')
      }

      function show() {
        console.log('js4.2')
      }
      window.js2 = { hd, show }
    })(window)


//调用的时候
js2.show()//调用js2的方法

//let有个块级作用域
{
  let a = "后盾人"
}
console.log(a)//打印不了  除非把a改成var a = ‘’

//下面这个方法也可以，和立即执行函数一样，不过现在都是用模块化方法
{
  let hd = function () {
    console.log('js4.2')
  };
  let show = function () {
    console.log('show 4.2')
  }
  window.xj = { hd, show }
}