//插入排序
var arr = [3, 5, 2, 1, 6, 4]

for (var i = 0; i < arr.length - 1; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {

      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
}
console.log(arr)



//冒泡排序


for (var i = 0; i < arr.length - 1; i++) {
  for (var j = i; j < arr.length - 1; j++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
  }



}