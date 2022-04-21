import courseData from "./../../data/courseData.js";
import cartData from "./../../data/cartData.js";
import Render from "./Render";
export default class Cart {
  constructor(oCart, observer) {
    this.oCart = oCart;
    this.observer = observer;
    this.courseData = courseData;
    this.cartData = cartData;

    this.init();
  }
  init() {
    new Render(this.oCart, this.courseData, this.cartData, this.observer);
  }
}
