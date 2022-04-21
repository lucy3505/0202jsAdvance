import tools from "../../utils/tools";
import cartItem from "../../tpl/cartItem.tpl";
import Event from "./Event";
@tools
export default class Render {
  constructor(oCart, courseData, cartData, observer) {
    this.oCart = oCart;
    this.observer = observer;
    this.courseData = courseData;
    this.cartData = cartData;
    this.init();
  }
  init() {
    this.render();
    new Event(this.oCart, this.courseData, this.cartData, this.observer);
  }
  render() {
    const oFrag = document.createDocumentFragment();

    this.cartData.forEach((item) => {
      oFrag.appendChild(
        Render.createElement(
          "li",
          Render.tplReplace(cartItem, {
            id: item.id,
            title: item.title,
            coupon: item.coupon,
            originPrice: item.coupon
              ? `<del>${item.price}.00</del>`
              : `$${item.price}.00`,
            currentPrice: item.coupon
              ? `￥${Number(item.price) - Number(item.coupon)}.00`
              : "",
          })
        )
      );
    });
    this.oCart.appendChild(oFrag);
  }
}
