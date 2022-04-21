(function (doc, win) {
  var oImgList = doc.getElementsByClassName("J_imgList")[0],
    data = JSON.parse(doc.getElementById("J_data").innerHTML),
    imgTpl = doc.getElementById("J_imgTpl").innerHTML,
    oImgs = doc.getElementsByClassName("list-img");

  var init = function () {
    renderList(data);
    console.log(oImgList);

    bindEvent();
    // setTimeout(function () {
    //   window.scrollTo(0, 0);
    // }, 150);
  };

  function bindEvent() {
    console.log(oImgs);

    window.onload = window.onscroll = throttle(imgLazyLoad(oImgs));
  }

  function renderList(data) {
    var list = "";
    data.forEach(function (elem) {
      list += imgTpl.replace(/{{(.*?)}}/g, function (node, key) {
        return {
          img: elem.img,
          name: elem.name,
        }[key];
      });
    });
    oImgList.innerHTML = list;
  }

  init();
})(document, window);

function imgLazyLoad(images) {
  var len = images.length;
  n = 0;
  return function () {
    var cHeight = document.documentElement.clientHeight,
      sTop = document.documentElement.scrollTop || document.body.scrollTop,
      imgItem;
    for (var i = n; i < len; i++) {
      imgItem = images[i];
      if (imgItem.offsetTop < cHeight + sTop) {
        console.log(imgItem.getAttribute("data-src"));
        imgItem.src = imgItem.getAttribute("data-src");
        imgItem.removeAttribute("data-src");
        n++;
      }
    }
  };
}

function throttle(fn, delay) {
  var t = null,
    begin = new Date().getTime();

  return function () {
    var _self = this,
      args = arguments,
      cur = new Date().getTime();

    clearTimeout(t);

    if (cur - begin >= delay) {
      fn.apply(_self, args);
      begin = cur;
    } else {
      t = setTimeout(function () {
        fn.apply(_self, args);
      }, delay);
    }
  };
}
