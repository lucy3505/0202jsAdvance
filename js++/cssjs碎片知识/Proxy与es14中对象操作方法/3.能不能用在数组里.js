let arr = [
  { name: "小明", age: 18 },
  { name: "小hong", age: 20 },
  { name: "小a", age: 22 },
  { name: "小b", age: 33 },
  { name: "小c", age: 44 },
];

let persons = new Proxy(arr, {
  get(arr, prop) {
    return arr[prop];
  },
  set(arr, prop, value) {
    arr[prop] = value;
  },
});

console.log(persons[3]);
persons[1] = { name: "小d", age: 46 };
console.log(persons, arr);
