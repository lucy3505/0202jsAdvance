function getScrollOffset() {
  if (window.pageXOffset) {
    return { left: window.pageXOffset, y: window.pageYOffset };
  } else {
    return {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop,
    };
  }
}

function addEvent(el, type, fn) {
  if (el.addEvenListener) {
    el.addEvenListener(type, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent("on" + type, function () {
      fn.call(el);
    });
  } else {
    el["on" + type] = fn;
  }
}

function getViewportSize() {
  //可是窗口大小
  if (window.innerWidth) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  } else {
    if (document.compatMode === "BackCompat") {
      return {
        width: document.body.clientHeight,
        height: document.body.clientWidth,
      };
    } else {
      //下面这个可能会包括滚动条  但是没影响
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      };
    }
  }
}

function getScrollSize() {
  if (document.body.scrollWidth) {
    return {
      width: document.body.scrollWidth,
      height: document.body.scrollHeight,
    };
  } else {
    return {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
    };
  }
}
