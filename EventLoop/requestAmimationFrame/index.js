//requestAnimationFrame vs setInterval
/**
 * 1.布局绘制的逻辑不同
 *   setInterval:回调有多少次dom操作，进行多少次计算，绘制
 *   requestAnimationFrame:把所有dom操作集中起来,一次进行同一的计算并进行统一绘制
 *
 * 2.窗口最小化时，运行情况不同
 *    setInterval:一直执行回调函数
 *    requestAnimationFrame:在最小化窗口时，暂停程序，页面打开时，从暂停的时候，重新开始
 *
 * 3.导致无意义的回调执行->重绘重排(记时时间间隔小于刷新率)
 *    setInterval(step,0)
 */

const el = document.querySelector(".box");
// console.log(1);
// let start;
// function step(timestamp) {
//   if (start === undefined) start = timestamp;
//   const elapsed = timestamp - start;

//   //这里使用·math.min()  确保元素刚好停在200px的位置
//   el.style.transform = "translateX(" + Math.min(0.1 * elapsed, 200) + "px)";

//   if (elapsed < 2000) {
//     //在两秒后停止动画
//     window.requestAnimationFrame(step);
//   }
// }

// window.requestAnimationFrame(step);

// let px = 0;
// let t = null;
// function step() {
//   px++;
//   el.style.transform = `translateX(${px}px)`;
//   if (px >= 200) {
//     clearInterval(t);
//   }
// }

// t = setInterval(step, 1000 / 60);

//验证2
let t1 = null,
  i = 0,
  j = 0;
t1 = setInterval(() => {
  console.log("setInterval,", i++);
}, 1000);

function step() {
  setTimeout(() => {
    window.requestAnimationFrame(step);
    console.log("requestAnimationFrame", j++);
  }, 1000);
}

window.requestAnimationFrame(step);
