import courseData from "./../../data/courseData.js";
import cartData from "./../../data/cartData.js";
import Render from "./Render.js";

export default class Course {
  constructor(oList, observer) {
    this.oList = oList;
    this.observer = observer;
    this.courseData = courseData;
    this.cartData = cartData;

    this.init();
  }
  init() {
    this.formatData();
    console.log(courseData);
    new Render(this.oList, this.courseData, this.cartData, this.observer);
  }
  formatData() {
    this.courseData = this.courseData.map((item) => {
      item.state = 0;
      this.cartData.forEach((itm) => {
        if (itm.id === item.id) {
          item.state = 1;
        }
      });
      return item;
    });
  }
}
