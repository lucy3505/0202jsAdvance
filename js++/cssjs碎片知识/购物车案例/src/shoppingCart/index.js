import Cart from "./cart";
import Course from "./course";
import Observer from "../utils/Observer";
import "./../css/reset.css";
import "./../css/index.scss";
export default class ShoppingCart {
  constructor() {
    this.oList = document.querySelector(".J_list");
    this.oCart = document.querySelector(".J_cart");
    this.observer = new Observer();
    this.init();
  }
  init() {
    console.log("init");
    new Course(this.oList, this.observer);
    new Cart(this.oCart, this.observer);
  }
}
