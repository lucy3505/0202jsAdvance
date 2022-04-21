import tools from "../../utils/tools";
import cartItem from "../../tpl/cartItem.tpl";
@tools
export default class Handle {
  constructor(courseData, cartData, oCart, observer) {
    this.courseData = courseData;
    this.cartData = cartData;
    this.oCart = oCart;
    this.observer = observer;
    this.init();
  }
  init() {
    this.observer.add(this.handleCartItem.bind(this));
  }
  handleCartItem(id, target, state) {
    if (state) {
      const itemData = this.courseData.filter((item) => {
        if (item.id === id) {
          return item;
        }
      })[0];

      const _item = Handle.createElement(
        "li",
        Handle.tplReplace(cartItem, {
          id: itemData.id,
          title: itemData.title,
          originPrice: itemData.coupon
            ? `<del>$${itemData.price}.00</del>`
            : `￥${itemData.price}.00`,
          currentPrice: itemData.coupon
            ? `￥${Number(itemData.price) - Number(itemData.coupon)}.00`
            : "",
          coupon: itemData.coupon ? itemData.coupon : "暂无优惠",
        })
      );
      this.oCart.appendChild(_item);
    } else {
      const oParentNode = target.parentNode;
      oParentNode.remove();
    }
  }
}
