class Compute {
  plus(a, b) {
    return a + b;
  }
  minus(a, b) {
    return a - b;
  }
  mul(a, b) {
    return a * b;
  }
  div(a, b) {
    return a / b;
  }
}
class Calculator extends Compute {
  constructor(document) {
    super();
    const oCal = document.querySelector(".calculator");
    this.fInput = oCal.querySelectorAll("input")[0];
    this.sInput = oCal.querySelectorAll("input")[1];
    this.oBtnGroup = oCal.querySelector(".btn-group");
    debugger;
    this.oBtnItems = this.oBtnGroup.querySelectorAll("button");
    this.oResult = oCal.querySelector(".result");

    // this.data = {}; //{fNumber:xx,sNumber:xx,filed:"plus"}
    this.data = this.defineData();
    this.btnIdx = 0;
  }
  init() {
    this.bindEvent();
  }
  bindEvent() {
    this.oBtnGroup.addEventListener("click", this.btnClick.bind(this), false);
    this.fInput.addEventListener("input", this.onNumberInput.bind(this), false);
    this.sInput.addEventListener("input", this.onNumberInput.bind(this), false);
  }
  onNumberInput(ev) {
    const e = ev || window.event,
      tar = e.target || e.srcElement,
      className = tar.className,
      val = Number(tar.value.replace(/\s+/g, "")) || 0;
    switch (className) {
      case "f-input":
        this.data.fNumber = val;
        break;
      case "s-input":
        this.data.sNumber = val;
        break;
      default:
        break;
    }
  }
  btnClick(ev) {
    const e = ev || window.event,
      tar = e.target || e.srcElement,
      tagName = tar.tagName.toLowerCase();

    tagName === "button" && this.fieldUpdate(tar);
  }
  fieldUpdate(tar) {
    this.oBtnItems[this.btnIdx].className = "";
    this.btnIdx = [].indexOf.call(this.oBtnItems, tar);
    tar.className += " current";
    this.data.field = tar.getAttribute("data-field");
  }
  defineData() {
    let _obj = {},
      fNumber = 0,
      sNumber = 0,
      field = "plus";
    const _self = this;
    Object.defineProperties(_obj, {
      fNumber: {
        get() {
          return fNumber;
        },
        set(newV) {
          fNumber = newV;
          _self.computeResult(fNumber, sNumber, field);
          console.log("fNumber has been changed");
        },
      },
      sNumber: {
        get() {
          return sNumber;
        },
        set(newV) {
          sNumber = newV;
          _self.computeResult(fNumber, sNumber, field);
          console.log("sNumber has been changed");
        },
      },
      field: {
        get() {
          return field;
        },
        set(newV) {
          field = newV;
          _self.computeResult(fNumber, sNumber, field);
          console.log("field has been changed");
        },
      },
    });
    return _obj;
  }
  computeResult(fNumber, sNumber, field) {
    this.oResult.innerText = this[field](fNumber, sNumber);
  }
}

new Calculator(document).init();
