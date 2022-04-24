Element.prototype.dragNclick = function (clickEvent) {
  var bTime = 0,
    eTime = 0,
    oPos = [];
  function drag() {
    addEvent(this, "mousedown", function (e) {
      bTime = new Date().getTime();
      cancelBubble(e);
      preventDefaultEvent(e);
      var e = e || window.event,
        x = pagePos(e).X - getStyles(this, "left"),
        y = pagePos(e).Y - getStyles(this, "top"),
        eleWidth = getStyles(this, "width"),
        eleHeight = getStyles(this, "height"),
        wWidth = getViewportSize().width,
        wHeight = getViewportSize().height,
        oPos = [getStyles(this, "left"), getStyles(this, "top")];
      var _self = this;
      addEvent(document, "mousemove", mousemove);
      addEvent(document, "mouseup", mouseup);
      console.log(getViewportSize());
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
      function mouseup() {
        eTime = new Date().getTime();
        console.log(this);
        if (eTime - bTime < 100) {
          clickEvent();
          _self.style.left = oPos[0] + "px";
          _self.style.top = oPos[1] + "px";
        }
        removeEvent(document, "mousemove", mousemove);
        removeEvent(document, "mouseup", mouseup);
      }
    });
  }
  drag.call(this);
};
