function addEvent(el, type, fn) {
  if (el.addEventListener) {
    el.addEventListener(type, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent("on" + type, function () {
      fn.call(el);
    });
  } else {
    el["on" + type] = fn;
  }
}

function removeEvent(elem, type, fn) {
  if (elem.addEventListener) {
    elem.removeEventListener(type, fn, false);
  } else if (elem.attachEvent) {
    elem.detachEvent("on" + type, fn);
  } else {
    elem["on" + type] = null;
  }
}

function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset,
    };
  } else {
    return {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop,
    };
  }
}

function getViewportSize() {
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

function elemChildren(node) {
  var temp = {
      length: 0,
      push: Array.prototype.push,
      splice: Array.prototype.splice,
    },
    len = node.childNodes.length;
  for (var i = 0; i < len; i++) {
    var childItem = node.childNodes[i];
    if (childItem.nodeType === 1) {
      // temp[temp["length"]] = childItem;
      // temp["length"]++;
      temp.push(childItem);
    }
  }
  return temp;
}
function elemParent(node, n) {
  var type = typeof n;
  if (type === "undefined") {
    return node.parentNode;
  } else if (n <= 0 || type !== "number") {
    return undefined;
  }
  while (n) {
    node = node.parentNode;
    n--;
  }
  return node;
}
function pagePos(e) {
  var sLeft = getScrollOffset().left,
    sTop = getScrollOffset().top,
    cLeft = document.documentElement.clientLeft || 0,
    cTop = document.documentElement.clientTop || 0;
  //document.documentElement.clientTop是用来获取文档偏移的  但有些浏览器是没这个属性值的，这个时候就赋值成0
  return {
    X: e.clientX + sLeft - cLeft,
    Y: e.clientY + sTop - cTop,
  };
}
function getStyles(elem, prop) {
  if (window.getComputedStyle) {
    if (prop) {
      return parseInt(window.getComputedStyle(elem, null)[prop]);
    } else {
      return window.getComputedStyle(elem, null);
    }
  } else {
    if (prop) {
      return parseInt(window.currentStyle[prop]);
    } else {
      return window.currentStyle;
    }
  }
}
function preventDefaultEvent(e) {
  var e = e || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}
function cancelBubble(e) {
  var e = e || window.event;
  if (e.stopPropagation) {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }
}
