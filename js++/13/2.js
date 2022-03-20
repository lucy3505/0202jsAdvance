//对象枚举

// 枚举->遍历
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

var car = {
  brand: "Benz",
  color: "red",
  displacement: "2.0",
  lang: "5",
  width: "2.5",
};

for (var key in car) {
  console.log(key + ":" + car[key]);
  //car.key=>car["key"]=>undefined
}

var arr = [1, 2, 3, 4, 5];
for (var i in arr) {
  console.log(arr[i]);
}
