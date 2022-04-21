import tools from "../../utils/tools.js";
import Handle from "./Handle.js";
@tools
export default class Event {
  constructor(oCart, courseData, cartData, observer) {
    this.oCart = oCart;
    this.courseData = courseData;
    this.cartData = cartData;
    this.observer = observer;
    this.init();
  }
  init() {
    this.bindEvent();
    this.handle = new Handle(
      this.courseData,
      this.cartData,
      this.oCart,
      this.observer
    );
  }

  bindEvent() {
    this.oCart.addEventListener(
      "click",
      this.onRemoveBtnClick.bind(this),
      false
    );
  }

  onRemoveBtnClick(ev) {
    const target = Event.getTarget(ev),
      className = target.className;
    if (className === "remove-btn") {
      const id = target.getAttribute("data-id");
      console.log(id);
      // this.handle.handleCartItem(id, target, 0);
      this.observer.notify(this, id, target, 0);
    }
  }
}
