// window.onload = function () {
//   init();//能打印出Test 因为这里执行时在js资源全都加载且执行完之后，这时候var test=的语句已经执行完  成了函数
// };

document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log(11);
    init(); //这里也可以  因为文档解析完了（这里包括同步的js文件），如果z这个Js是异步（async）的，那就不知道了  因为异步加载的js文件可能比外面html解析完成快或者慢,不确定性去触发这个事件
    //如果js是defer呢？可以打印出Test  因为defer是在文档解析完之后（也就是js脚本都执行完）再去执行 也就是这个
  },
  false
);

// init(); //这里会报错 因为预编译问题

function init() {
  test();
}

var test = (function () {
  function init() {
    console.log("Test");
  }
  return function () {
    init();
  };
})();

//做异步的时候，文件最好都是不涉及dom ,一般网络请求可以放异步js,网站上异步的一般很少用
//传统浏览器：因为dom生成要整个文档解析完毕，也就是要读到</html>这个标签才算解析完毕，那script放head和body底部就是一样的，因为都会阻塞om生成，但是现代浏览器是读到哪个部分就是先解析的那个部分就先构建domtree csstree rendertree并渲染，现在的浏览器是解析的过程中就开始渲染，那么script放头部就会阻塞
//first paint：初次绘制，现代浏览器都会有，只要解析到html中需要渲染的东西了，那么我一边解析一边构建一边渲染，所以script要放底部，否则会留白
//如果非要把script写在body上面，且里面 要获取dom元素等，那就要用window.onload或DOMContentLoaded事件，当然，DOMContentLoaded更好

//jquery中：$(document).ready(function(){})
// $(function(){})
//        $(document).on("ready",function(){})
// 上面三种都是一个意思：文档解析完毕  就是DOMContentLoaded
//DOMContentLoaded有兼容性问题 ie8以下不能用  可使用onreadystatechange做兼容


function domReady(fn) {
  if (this.addEventListener) {
    this.addEventListener(
      "DOMContentLoaded",
      function () {
        fn();
        document.removeEventListener("DOMContentLoaded", domReady, false);
      },
      false
    );
  } else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
      if (this.readyState === "complete") {
        //为什么不用interactive 因为在ie浏览器这个状态不稳定，所以用complete
        document.attachEvent("onreadystatechange", arguments, callee);
        fn();
      }
    });
  }
  if (
    document.documentElement.doScroll &&
    typeof window.frameElement === "undefined"
  ) {
    //判断窗口不在iframe里  doScroll是ie6,7才有  这个判断是兼容IE6 7
    try {
      document.documentElement.doScroll("left");
    } catch (e) {
      return setTimeout(arguments.callee, 20);
    }
    fn();
  }
}
Document.prototype.domReady = function (fn) {};
