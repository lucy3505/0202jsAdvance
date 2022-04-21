(function (document) {
  let x, y, w, h, viewW, viewH, xr, yb, maxLeft, maxTop;
  function DragTool(opt) {
    this.el = opt.el;
    this.dragClassName = opt.className;
    this.x = null;
    this.y = null;
    this.moveEventNam = null;
    console.log(this.el);
    if (!this.el) {
      return new Error("必须指定一个元素");
    }
    this.init();
  }
  DragTool.prototype = {
    init() {
      this.bindEvent();
    },
    bindEvent() {
      const el = this.el;
      addEvent(el, "mousedown", this.mousedownEvent.bind(this));
    },

    mousedownEvent(e) {
      var e = e || window.e,
        elem = this.el;

      x = pagePos(e).X - getStyles(elem, "left");
      y = pagePos(e).Y - getStyles(elem, "top");
      w = getStyles(elem, "width");
      h = getStyles(elem, "height");
      xr = w - x;
      yb = h - y;
      viewW = getViewportSize().width;
      viewH = getViewportSize().height;
      maxLeft = viewW - w;
      maxTop = viewH - h;

      cancelBubble(e);
      preventDefaultEvent(e);
      const _self = this;

      function mousemoveEvent1(e) {
        _self.mousemoveEvent(e);
      }
      function mouseupEvent1(e) {
        // this.mouseUpName = arguments.callee;
        // console.log(this.mousemoveEvent);
        removeEvent(document, "mousemove", mousemoveEvent1);
        removeEvent(document, "mouseup", mouseupEvent1);
      }
      // addEvent(document, "mousemove", this.mousemoveEvent.bind(_self));
      // addEvent(document, "mouseup", this.mouseupEvent.bind(_self));
      addEvent(document, "mousemove", mousemoveEvent1);
      addEvent(document, "mouseup", mouseupEvent1);
    },
    mousemoveEvent(e) {
      var e = e || window.event,
        elem = this.el;
      this.moveEventName = arguments.callee;

      if (e.clientX < x) {
        elem.style.left = 0;
      } else if (e.clientX >= viewW - xr) {
        elem.style.left = maxLeft + "px"; //！！一定要有px
      } else {
        elem.style.left = pagePos(e).X - x + "px";
      }

      if (e.clientY < y) {
        elem.style.top = 0;
      } else if (e.clientY >= viewH - yb) {
        elem.style.top = maxTop + "px";
      } else {
        elem.style.top = pagePos(e).Y - y + "px";
      }
    },
    mouseupEvent(e) {
      // this.mouseUpName = arguments.callee;
      console.log(this.mousemoveEvent);
      removeEvent(document, "mousemove", this.mousemoveEvent);
      removeEvent(document, "mouseup", arguments.callee);
    },
  };

  window.DragTool = DragTool;
})(document);
