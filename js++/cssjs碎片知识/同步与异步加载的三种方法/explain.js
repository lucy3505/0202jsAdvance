/**
 *! link是加载css  这时候浏览器会新开一个线程，是异步的，不会阻塞的dom的加载，所以不用放Body的最后
 *
 * script默认是同步的  会阻塞dom,或者后面的script
 * 因为script经常会有修改dom结构等，所以script设置成了同步
 *
 * <script defer="defer">会变成异步加载，就类似于link标签
 * !defer  IE8及以下 defer的特点是加载完成后不立即执行，要等dom构建完成后才执行
 *
 * !async  w3c的标准  ie9及以上支持 特点是只要下载完就执行
 *
 * 异步加载里面就不要写和dom相关操作的东西
 *
 * defer和async同时出现的时候，除了ie，其他都认async
 * 一般是工具函数或者工具库才会去用async,网络进行检查的库
 * 整个文件都是函数，函数里面有dom操作，只要不执行函数，也是可以用异步加载
 *
 * 按需加载：
 *
 * 1.html里面演示了动态加载js文件，这个是兼容defer和async的方法，.src的时候就去下载文件，append的时候就会执行文件
 *
 * 如果既要下载一个脚本  又要去执行脚本里的代码就用2.html
 *
 * 判断脚本是否下载完  script有onload事件来判断是否加载完成，但是ie8以下要用onreadystatechange方法
 *
 * 有一些脚本是不需要dom的，这些文件就能使用异步加载，就能使用2.html
 * 用动态创建的script一定是异步加载的：createElement("script")
 * 异步加载会阻塞window.onload,所以会有
 *  if (window.attachEvent) {
          //ie添加事件处理函数的方法,这里是用来兼容ie
          window.attachEvent("onload", async_load); //onload以后添加异步加载方法
        } else {
          window.addEventListener("load", async_load, false);
        }
 */
