import tools from "../../utils/tools.js";
import Handle from "./Handle.js";
@tools
export default class Event {
  constructor(oList, courseData, cartData, observer) {
    this.oList = oList;
    this.courseData = courseData;
    this.cartData = cartData;
    this.observer = observer;
    this.oAddBtns = this.oList.querySelectorAll(".add-btn");
    this.init();
  }
  init() {
    this.bindEvent();
    this.handle = new Handle(
      this.courseData,
      this.cartData,
      this.oAddBtns,
      this.observer
    );
  }

  bindEvent() {
    this.oList.addEventListener("click", this.onAddBtnClick.bind(this), false);
  }

  onAddBtnClick(ev) {
    const target = Event.getTarget(ev),
      className = target.className;
    if (className === "add-btn") {
      const id = target.getAttribute("data-id");
      console.log(id);
      // this.handle.setState(id, target, 1);
      // this.handle.setAddBtnState(id, target, 1);
      this.observer.notify(this, id, target, 1);
    }
  }
}
