// 冒泡排序
// 最简单的排序算法之一；平均复杂度O(n2)，最好的情况O(n)，最坏的排序O(n2)

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
        var temp = arr[j + 1];        //元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 选择排序
function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     //寻找最小的数
        minIndex = j;                 //将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}


// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var s = Math.floor(arr.length / 2);

  var temp = arr.splice(s, 1);

  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < temp) {
      left.push(arr[i]);
    }
    if (arr[i] >= temp) {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(temp, quickSort(right));

}

// 插入排序
function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
// 合并排序
// 堆排序
// 回文字符串
// 二叉树前中后遍历
// 二叉树路径总和
// 二分查找
// 二分法查找的前提数组必须有序

// 选择中间值
// 如果选择的值，是待搜索的值，算法结束并返回
// 如果待搜索值比选中值要小，则返回步骤①并在选中值左边的子数组中寻找。
// 如果待搜索值比选中值要大，则返回步骤①并在选中值右边的子数组中寻找
function binSearch(arr, data) {
  //将传入的数组用快速排序算法排序一下
  var arr = qSort(arr);
  //将最后一个元素所在的位置设为上边界
  var upperBound = arr.length - 1;
  //将数组的第一个位置设为下边界
  var lowerBound = 0;

  while (lowerBound <= upperBound) {
    //中点
    var mid = Math.floor((upperBound + lowerBound) / 2);
    //如果待查询的值大于中点元素，则将下边界设置为中点元素所在下标加1，也就是选取数组的右半边(不包括中点元素)，然后再在里面查找
    if (arr[mid] < data) {
      lowerBound = mid + 1;
      //如果待查询的值小于中点元素，同理如上
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
      //否则如果相等，返回
    } else {
      return mid;
    }
  }
  return -1;
}

var test = [1, 2, 3, 4, 5, 6];
console.log(binSearch(test, 2)); //位置"1"
function getIndex(arr, num) {
  var len = arr.length,
    st = 0,
    end = len - 1
  while (st <= end) {
    var mid = Math.floor((st + end) / 2)
    if (num == arr[mid]) {
      return mid
    } else if (num > arr[mid]) {
      st = mid + 1
    } else {
      end = mid - 1
    }
  }
  return arr;
}

var ary = [1, 4, 7, 8, 12, 34, 67, 88, 99, 100]
// 求和函数 sum 支持 sum(x,y) 和 sum(x)(y)
function sum() {
  var num = arguments[0];
  if (arguments.length == 1) {
    return function (sec) {
      return num + sec;
    }
  } else {
    var num = 0;
    for (var i = 0; i < arguments.length; i++) {
      num = num + arguments[i];
    }
    return num;
  }
}
function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function () {
    _args.push(...arguments);
    return _adder;
  };

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b;
    });
  }
  return _adder;
}
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;
add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9
// 根据以上补充下函数柯里化：
// 所谓"柯里化"，就是把一个多参数的函数，转化为单参数函数 将一个函数转换为一个新的函数。

// curry 的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

// 使用柯里化的好处：
// 1、代码复用，减少维护成本；
// 2、尽可能的函数化，便于阅读’

// 数组扁平化：
// 方法一：

// 主要用到join

// 扁平化简单的二维数组

const arr = [11, [22, 33], [44, 55], 66];

const flatArr = arr.join().split(','); // ["11", "22", "33", "44", "55", "66"]
// 方法二：

// 扁平化简单的二维数组
const arr = [11, [22, 33], [44, 55], 66];

const flatArr = arr.toString().split(','); // ["11", "22", "33", "44", "55", "66"]
// 方法三：

// flat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。

[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]
// 如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数

[1, [2, [3]]].flat(Infinity)
// [1, 2, 3]
// 方法五：

function flatten(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
// js 实现flat

//实现方式1 //递归
Array.prototype.flat = function () {
  var arr = [];
  this.forEach((item, idx) => {
    if (Array.isArray(item)) {
      arr = arr.concat(item.flat());
    } else {
      arr.push(item)
    }
  })
  return arr
}
Array.prototype.flat = function () {
  return this.toString()      //"1,2,3,4"
    .split(",")         //["1", "2", "3", "4"]
    .map(item => +item);//[1, 2, 3, 4]
};

// 两数之和：
// 给定一个整数的数组nums，，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 时间复杂度：O(n^2) 。
// 给定 nums = [2, 7, 11, 15], target = 9

// 1、暴力方法：
// 使用两层循环，外层循环计算当前元素与 targettarget 之间的差值，内层循环寻找该差值，若找到该差值，则返回两个元素的下标。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var dif = target - nums[i];
    // j = i + 1 的目的是减少重复计算和避免两个元素下标相同
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] == dif)
        return [i, j];
    }
  }
};
// 2、利用数组减少查询时间
// 时间复杂度：O(n)。

var twoSum = function (nums, target) {
  var temp = [];
  for (var i = 0; i < nums.length; i++) {
    var dif = target - nums[i];

    if (temp[dif] != undefined) {

      return [temp[dif], i];
    }
    temp[nums[i]] = i;
  }
};
// 给一个数组（其元素不重复），求所有元素相加为某个值的2个元素对的下标对
// eg: [2, 9, 3, 10, 8, 1, 22] 目标值11，有[[0, 1], [2, 4], [3, 5]]

function arrTarget(arr, target) {
  console.log(arr)
  const a = arr.slice().sort((a, b) => a - b);
  const len = a.length;
  const key = [];//存放最后的元素组
  const val = [];//存放最后的下标组
  if (len <= 1) return;
  let i = 0;
  let j = len - 1;
  while (i < j) {
    console.log(a[i], a[j])
    if (a[i] + a[j] < target) {
      i++
    } else if (a[i] + a[j] > target) {
      j--
    } else {

      val.push([a[i], a[j]])
      key.push([i, j])
      i++; j--;
    }
  }
  // 如果只要下标组，则：return key;
  return {
    key, val
  }
}
// 三数之和：
var threeSum = function (nums) {
  // 最左侧值为定值，右侧所有值进行两边推进计算
  let res = [];
  nums.sort((a, b) => a - b);
  let size = nums.length;
  if (nums[0] <= 0 && nums[size - 1] >= 0) {
    // 保证有正数负数
    let i = 0;
    while (i < size - 2) {
      if (nums[i] > 0) break; // 最左侧大于0，无解
      let first = i + 1;
      let last = size - 1;
      while (first < last) {
        if (nums[i] * nums[last] > 0) break; // 三数同符号，无解
        let sum = nums[i] + nums[first] + nums[last];
        if (sum === 0) {
          res.push([nums[i], nums[first], nums[last]]);
        }
        if (sum <= 0) {
          // 负数过小，first右移
          while (nums[first] === nums[++first]) { } // 重复值跳过
        } else {
          while (nums[last] === nums[--last]) { } // 重复值跳过
        }
      }
      while (nums[i] === nums[++i]) { }
    }
  }

  return res;
};

// 作者：githber
// 链接：https://leetcode-cn.com/problems/3sum/solution/three-sum-giftu-jie-by-githber/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// 2、 执行52ms

var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i >= 1 && nums[i] === nums[i - 1]) {
      continue
    }
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]])
        j++
        while (nums[j - 1] === nums[j]) {
          j++
        }
      } else if (sum < 0) {
        j++
      } else {
        k--
      }
    }
  }

  return res
}

//内部有小循环来过滤重复～

// 无重复字符串最长子字符串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3
var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let max = 0;
  for (let item of s) {
    console.log(item, arr)
    if (arr.includes(item)) {
      let index = arr.indexOf(item);
      arr.splice(0, index + 1);
    }
    arr.push(item);
    max = max > arr.length ? max : arr.length;
  }
  return max;
};
// 相等和不相等——先转换再比较 （==）
// 全等和不全等——仅比较而不转换 （===）

// 如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false转换为0，而true转换为1

// 如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值

// 如果一个操作数是对象，另一个操作数不是，则调用对象的valueOf()方法，用得到的基本类型值按照前面的规则进行比较

// null 和undefined 是相等的

// 要比较相等性之前，不能将null 和 undefined 转换成其他任何值

// 如果有一个操作数是NaN，则相等操作符返回 false ，而不相等操作符返回 true。重要提示：即使两个操作数都是NaN，相等操作符也返回 false了；因为按照规则， NaN 不等于 NaN

• if ([] == false) { console.log(1); }; // 1
• if ([]) { console.log(3); }; // 3
• if ({} == false) { console.log(2); }; //不输出
• if ({}) { console.log(2); }; // 2
• if ([1] == [1]) { console.log(4); }; // 不
if ([] == '') { console.log(5) } //5
[] == ![] // true
// ————————————————

// 空数组[]和空对象{}都是object类型：
// 空数组[]转化为Number，会得到0；空对象{}转化为Number，会得到NaN：
// console.log(Number([])); // 控制台输出0
// console.log(Number({})); // 控制台输出NaN
// 空数组[]和空对象{}都是object类型，因此直接用于if判断条件时就会被转化为 true
// 任意值与布尔值比较，都会将两边的值转化为Number
// 如果将空数组[]与布尔值false比较，false转化为0，而空数组[]也转化为0，因此[] == false的判断得到true
// 如果将空对象{}与布尔值false比较，false转化为0，而空对象{}转化为NaN，由于NaN与任何数都不相等，因此{} == false的判断得到false
// 引用类型之间的比较是内存地址的比较，不需要进行隐式转换,
// 所以 [] == [] //false 地址不一样
// *[]==![] // true
// 现在来探讨 [] == ! [] 的结果为什么会是true:
// 1、根据运算符优先级 ，！ 的优先级是大于 == 的，所以先会执行 ![]

// ！可将变量转换成boolean类型，null、undefined、NaN以及空字符串('')取反都为true，其余都为false。
// 所以 ! [] 运算后的结果就是 false

// 2、也就是 [] == ! [] 相当于 [] == false;
// 根据上面提到的规则（如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false转换为0，而true转换为1），则需要把 false 转成 0;
// 也就是 [] == ! [] 相当于 [] == false 相当于 [] == 0
// 3、根据上面提到的规则（如果一个操作数是对象，另一个操作数不是，则调用对象的valueOf()方法，用得到的基本类型值按照前面的规则进行比较，如果对象没有valueOf()方法，则调用 toString()）
// 而对于空数组，[].toString() -> '' (返回的是空字符串)；
// 也就是 [] == 0 相当于 '' == 0
// 4、根据上面提到的规则（如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值）
// Number('') -> 返回的是 0
// 相当于 0 == 0 自然就返回 true了

// [] == ! [] -> [] == false -> [] == 0 -> '' == 0 -> 0 == 0 -> true

// 作者：Lyan_2ab3
// 链接：https://www.jianshu.com/p/fbd15c5c7d2e
// 来源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。