
// 回调：大多出现在Ajax请求，用于处理收到的请求结果。



// 回调概念
// 理解一个新东西，很有必须去理解下它的概念，因为这是最简洁明了，前人总结的。

// A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.

// 中文意思：回调是一个函数被作为一个参数传递到另一个函数里，在那个函数执行完后再执行。
// 有点绕，好，咱们说大白话。就是 B函数被作为参数传递到A函数里，在A函数执行完后再执行B。

// 下面咱们看看代码怎么实现回调。

function A(callback) {
  console.log("I am A");
  callback();  //调用该函数
}

function B() {
  console.log("I am B");
}

// A(B);
// 这应该是最最简单的回调了，我想大家应该明白回调的释义了吧。
// 当然，这么简单的同步回调代码是不会用的，现实中用都是相对比较复杂带传参。

// 回调函数和异步
// 一开始我被回调和异步有点搞晕了。还以为回调就一定是异步的呢。
// !其实不然，相信上面的A,B函数的例子我们已经明白，回调并不一定就是异步。他们自己并没有直接关系。

// 下面我们可以理解下 同步回调和异步回调（同步异步我就不单独讲了，概念很简单）。

// 同步回调
// 就是上面的A B函数例子，它们就是同步的回调。

// 异步回调
// 因为js是单线程的，但是有很多情况的执行步骤（ajax请求远程数据，IO等）是非常耗时的，如果一直单线程的堵塞下去会导致程序的等待时间过长页面失去响应，影响用户体验了。

// 如何去解决这个问题呢，我们可以这么想。耗时的我们都扔给异步去做，做好了再通知下我们做完了，我们拿到数据继续往下走。

var xhr = new XMLHttpRequest();
xhr.open('POST', url, true);   //第三个参数决定是否采用异步的方式
xhr.send(data);
xhr.onreadystatechange = function () {
  if (xhr.readystate === 4 && xhr.status === 200) {
    ///xxxx
  }
}
// 上面是一个代码，浏览器在发起一个ajax请求，会单开一个线程去发起http请求，这样的话就能把这个耗时的过程单独去自己跑了，在这个线程的请求过程中，readystate 的值会有个变化的过程，每一次变化就触发一次onreadystatechange 函数，进行判断是否正确拿到返回结果。

// 图片描述

// 异步编程的实现
// 就我目前知道两种 回调函数 和 事件监听 ，其实看了阮神的 异步编程的文章 和下面的评论之后得出的理解。下面咱们就看看这两种异步编程的方式吧。

// 回调函数
// 假定有三个函数

f1()

f2()

f3()
// 但是，f1执行很耗时，而 f2需要在f1执行完之后执行。
// 为了不影响 f3的执行，我们可以把f2写成f1的回调函数。

//最原始的写法-同步写法

f1(); //耗时很长，严重堵塞
f2();
f3(); //导致f3执行受到影响


//改进版-异步写法
function f1(callback) {
  setTimeout(function () {
    // f1的任务代码
    callback();
  }, 1000);
}

f1(f2); //

f3();
//* 上面的写法是利用 setTimeOut把f1的逻辑包括起来，实现javascript中的异步编程。这样的话，f1异步了，不再堵塞f3的执行。
// 顺道说下，js是单线程的，这里所谓的异步也是伪异步，并不是开了多线程的异步。它是什么原理呢，其实是任务栈，setTimeOut方法的原理是根据后面的定时时间，过了这个定时时间后，将f1加入任务栈，注意仅仅是加入任务栈，并不是放进去就执行，而是根据任务栈里的任务数量来确定的。

// 事件监听
// 这里我直接用阮神的例子，通过事件触发操作，就是类似于咱们点击事件里的处理逻辑。

// 同样 f1 , f2 两个函数。

f1()

f2()
// f1 我们给它加一个事件,事件触发 f2 函数。


function f1() {
  setTimeOut(function () {
    f1.trigger('click');
  })
}

f1.on('click', f2);
// 另外多说点，这上面的两种方式都是 js 中的伪异步，而 ajax 的异步是底层多线程函数异步。

// 写在最后
// 由于时间问题，后续的理解会再补上，再理理思路。另外如果有错误，也请各位前辈给予指正，感激不尽。

