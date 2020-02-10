function avg(total, year = 1) {
  // year = year || 1 //以前的方法
  return Math.round(total / year)
}
console.log(total(2000, 3))//不传3的话默认一年

function sortArray(array, type = "asc") {
  return array.sort(function (a, b) {
    return type == "asc" ? a - b : b - a
  })
}
function sortArray(array, type = "asc") {
  return array.sort((a, b) => "asc" ? a - b : b - a)
}
console.log(sortArray([3, 2, 4, 1], "desc")
)

function sum(total, discount = 0, dis = 0) {
  return total * (1 - discount)
    * (1 - dis)
}
console.log(sum(1000, 0.1, 0.2))//不一定传参的放在后面，total参数不能放最好，默认参数的一般都放在最后边