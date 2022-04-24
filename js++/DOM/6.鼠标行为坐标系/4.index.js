var dragNclick = function (elem, elemClick) {
  var bTime = 0,
    eTime = 0,
    oPos = [];
  function elemDrag() {
    var x, y;
    addEvent(elem, "mousedown", function (e) {
      bTime = new Date().getTime();
      cancelBubble(e);
      preventDefaultEvent(e);
      var e = e || window.event,
        x = pagePos(e).X - getStyles(elem, "left"),
        y = pagePos(e).Y - getStyles(elem, "top"),
        w = getStyles(elem, "width"),
        h = getStyles(elem, "height"),
        xr = w - x,
        yb = h - y,
        viewW = getViewportSize().width,
        viewH = getViewportSize().height,
        maxLeft = viewW - w,
        maxTop = viewH - h;
      oPos = [getStyles(elem, "left"), getStyles(elem, "top")];

      addEvent(document, "mousemove", mousemove);
      addEvent(document, "mouseup", mouseup);
      console.log(getViewportSize());
      function mousemove(e) {
        var e = e || window.event;

        if (e.clientX < x) {
          elem.style.left = 0;
        } else if (e.clientX >= viewW - xr) {
          // console.log(e.clientX);
          // console.log("viewW", viewW);
          // console.log("width", w);
          // console.log("maxLeft", maxLeft);
          elem.style.left = maxLeft + "px"; //！！一定要有px
          // console.log("left", elem.style.left);
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

        // elem.style.left =
        //   e.clientX >= getViewportSize() - xr
        //     ? e.clientX - x
        //     : pagePos(e).X - x + "px";
        // elem.style.top = pagePos(e).Y - y + "px";
      }
      function mouseup() {
        eTime = new Date().getTime();
        console.log(this);
        if (eTime - bTime < 300) {
          elemClick();
          elem.style.left = oPos[0] + "px";
          elem.style.top = oPos[1] + "px";
        }
        removeEvent(document, "mousemove", mousemove);
        removeEvent(document, "mouseup", mouseup);
      }
    });
  }
  elemDrag(elem);
};
