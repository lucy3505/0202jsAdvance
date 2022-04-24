Element.prototype.dragNclick = function (menu, clickEvent) {
  var bTime = 0,
    eTime = 0,
    eleWidth = getStyles(this, "width"),
    eleHeight = getStyles(this, "height"),
    wWidth = getViewportSize().width,
    wHeight = getViewportSize().height,
    mWidth = getStyles(menu, "width"),
    mHeight = getStyles(menu, "height"),
    cbTime = 0,
    ceTime = 0,
    counter = 0,
    t = null,
    oPos = [];
  function drag() {
    var x, y;
    var _self = this;
    addEvent(this, "mousedown", function (e) {
      var e = e || window.event,
        btnCode = e.button;
      if (btnCode == 2) {
        var mLeft = pagePos(e).X,
          mTop = pagePos(e).Y;

        if (mLeft <= 0) {
          mLeft = 0;
        } else if (mLeft >= wWidth - mWidth) {
          mLeft = pagePos(e).X - mWidth;
        }

        if (mTop <= 0) {
          mTop = 0;
        } else if (mTop >= wHeight - mHeight) {
          mTop = pagePos(e).Y - mHeight;
        }

        menu.style.left = mLeft + "px";
        menu.style.top = mTop + "px";
        menu.style.display = "block";
      } else if (btnCode === 0) {
        menu.style.display = "none";
        x = pagePos(e).X - getStyles(this, "left");
        y = pagePos(e).Y - getStyles(this, "top");

        oPos = [getStyles(this, "left"), getStyles(this, "top")];
        bTime = new Date().getTime();
        cancelBubble(e);
        preventDefaultEvent(e);

        addEvent(document, "mousemove", mousemove);
        addEvent(document, "mouseup", mouseup);
      }
    });

    addEvent(document, "contextmenu", function (e) {
      var e = e || window.event;
      preventDefaultEvent(e);
    });

    addEvent(document, "click", function (e) {
      menu.style.display = "none";
    });
    addEvent(menu, "click", function (e) {
      var e = e || window.event;
      cancelBubble(e);
    });

    function mousemove(e) {
      var e = e || window.event,
        eleLeft = pagePos(e).X - x,
        eleTop = pagePos(e).Y - y;

      if (eleLeft <= 0) {
        eleLeft = 0;
      } else if (eleLeft >= wWidth - eleWidth) {
        eleLeft = wWidth - eleWidth - 1;
      }

      if (eleTop <= 0) {
        eleTop = 0;
      } else if (eleTop >= wHeight - eleHeight) {
        eleTop = wHeight - eleHeight - 1;
      }

      _self.style.left = eleLeft + "px";
      _self.style.top = eleTop + "px";
    }
    function mouseup(e) {
      var e = e || window.event;
      cancelBubble(e);
      preventDefaultEvent(e);
      eTime = new Date().getTime();
      console.log(this);
      if (eTime - bTime < 100) {
        _self.style.left = oPos[0] + "px";
        _self.style.top = oPos[1] + "px";
        counter++;
        if (counter === 1) {
          cbTime = new Date().getTime();
        }
        if (counter === 2) {
          ceTime = new Date().getTime();
        }
        if (cbTime && ceTime && ceTime - cbTime < 200) {
          clickEvent();
          cbTime = 0;
          ceTime = 0;
          counter = 0;
        }
        t = setTimeout(() => {
          cbTime = 0;
          beTime = 0;
          counter = 0;
          clearTimeout(t);
        }, 500);
      }
      removeEvent(document, "mousemove", mousemove);
      removeEvent(document, "mouseup", mouseup);
    }
  }
  drag.call(this);
};
