const data = [
  { name: "js", price: 100 },
  { name: "mysql", price: 200 },
  { name: "vue", price: 300 },
];
// const p = data.sort((a, b) => b.price - a.price);
// console.log(p);

class Lesson {
  constructor(data) {
    this.model = data;
  }

  price() {
    return this.model.price;
  }

  name() {
    return this.model.name;
  }

  static createBatch(data) {
    return data.map((item) => new this(item));
  }

  static maxPrice(data) {
    return data.sort((a, b) => {
      // console.log(a);
      // return b.model.price - a.model.price;
      return b.price() - a.price();
    })[0];
  }
}

let obj1 = new Lesson(data[0]);

let lessons = Lesson.createBatch(data);
// console.log(obj1);
// console.log(lessons);

const m = Lesson.maxPrice(lessons).price();
console.log(m);
