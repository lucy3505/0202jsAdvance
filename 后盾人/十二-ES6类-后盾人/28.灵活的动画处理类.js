class Animation {
  constructor(el) {
    this.el = el;
    console.log(this.el);
    this.defaultHeight = this.height;
    console.log(this.height);
  }
  hide(cb) {
    const timer = setInterval(() => {
      console.log(this.height);
      if (this.height <= 1) {
        clearInterval(timer);
        cb && cb();
      }
      this.height = this.height - 1;
    });
  }
  show() {
    const timer = setInterval(() => {
      console.log(this.height);
      if (this.height >= this.defaultHeight) {
        clearInterval(timer);
      }
      this.height = this.height + 1;
    });
  }

  get height() {
    return window.getComputedStyle(this.el).height.slice(0, -2) * 1;
  }
  set height(h) {
    this.el.style.height = h + "px";
  }
}

class Slider {
  constructor(props) {
    const { el = ".s1", link = "dt", panel = "dd" } = props;
    this.el = document.querySelector(el);
    this.links = this.el.querySelectorAll(link);
    this.panels = [...this.el.querySelectorAll(panel)].map(
      (item) => new Panel(item)
    );

    this.defaultHeight = this.height;
    console.log(this.panels);
  }
  run() {
    this.bindEvent();
  }
  bindEvent() {
    this.links.forEach((link, i) => {
      link.addEventListener("click", () => {
        this.action(i);
      });
    });
  }
  action(i) {
    // this.panels[i].hide();
    console.log(i);
    Panel.hideAll(Panel.filter(this.panels, i), () => {
      this.panels[i].show();
    });
  }
}
class Panel extends Animation {
  static num = 0;
  constructor(el) {
    super(el);
  }
  static hideAll(items, cb) {
    if (Panel.num > 0) return;
    items.forEach((item) => {
      Panel.num++;
      item.hide(() => {
        Panel.num--;
      });
    });
    cb & cb();
  }
  static filter(items, i) {
    return items.filter((item, idx) => i !== idx);
  }
}

const slider = new Slider({ el: ".s1" }).run();

// slider.show();
