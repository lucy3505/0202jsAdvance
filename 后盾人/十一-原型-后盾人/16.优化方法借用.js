//数学方法里本来就有求最大值的方法,也可以借用这个方法
Math.max(1, 3, 4, 5, 22, 3)
let hd = {
  data: [1, 2, 3, 4, 5]
}
Math.max.apply(null, hd.data)
Math.max.apply(null, ...hd.data)
Math.max.apply(null, hd.data)