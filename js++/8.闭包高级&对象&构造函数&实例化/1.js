//写一个构造函数，接受数字类型的参数，参数数量不定，完成参数相加和相乘的功能
function Cal(...args) {
  const nums = args;
  console.log(nums);
  const sum = nums.reduce((t, num) => t + num, 0);
  console.log(sum);
  const mul = nums.reduce((t, num) => t * num);
  console.log(mul);
}

const cal = new Cal(13, 2, 2);
