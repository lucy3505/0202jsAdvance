const data = [
  {
    classes: "19",
    course: "science",
    datetime: "123212321",
    id: "1",
    img: "red.jpg",
    is_free: "0",
    teacher: "tt",
  },
  {
    classes: "192",
    course: "science2",
    datetime: "1232123212",
    id: "2",
    img: "red.jpg",
    is_free: "0",
    teacher: "tt",
  },
  {
    classes: "18",
    course: "science",
    datetime: "123212321",
    id: "3",
    img: "red.jpg",
    is_free: "0",
    teacher: "tt",
  },
  {
    classes: "194",
    course: "science",
    datetime: "123212321",
    id: "4",
    img: "red.jpg",
    is_free: "1",
    teacher: "tt",
  },
  {
    classes: "195",
    course: "science",
    datetime: "123212321",
    id: "5",
    img: "red.jpg",
    is_free: "1",
    teacher: "tt",
  },
];
function compose2() {
  var args = Array.prototype.slice.call(arguments);
  return function (x) {
    return args.reduceRight(function (prev, cur) {
      return cur(prev);
    }, x);
  };
}

function classesFilter(data) {
  return data.classes > 20 && data;
}
function freeFilter(data) {
  // console.log(data);
  return data.is_free === "1" && data;
}
var arr = [],
  f = null;
data.forEach(function (val) {
  f = compose2(freeFilter, classesFilter);
  // console.log(f(val));
  f(val) && arr.push(val);
});
// console.log(arr);
console.log(false.is_free);
