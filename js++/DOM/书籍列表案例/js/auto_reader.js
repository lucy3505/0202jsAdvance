(function () {
  var wHeight = getViewportSize().height,
    sHeight = getScrollSize().height;
  var isPlay = false,
    t = null;
  var AutoReader = function (opt) {
    this.playBtn = opt.playBtn;
    this.sTopBtn = opt.sTopBtn;
    var _self = this;
    this.playImg = opt.playImg;
    this.pauseImg = opt.pauseImg;
    if (!this.playBtn || !this.sTopBtn || !this.pauseImg || !this.playImg) {
      console.log("sorry,这四个配置项必须全部配置");
      return;
    }

    addEvent(this.sTopBtn, "click", function () {
      window.scrollTo(0, 0);
      clearInterval(t);
      isPlay = false;
      _self.playBtn.style.backgroundImage = `url(${_self.playImg})`;
    });
    // addEvent(window, "scroll", function () {
    //   _self.sTopBtnShow.call(_self);
    // });
    _self.sTopBtnShow();
    addEvent(window, "scroll", this.sTopBtnShow.bind(this));
    addEvent(this.playBtn, "click", function (e) {
      // _self.setAutoPlay(e);
      _self.setAutoPlay.call(_self.playBtn);
    });
  };
  AutoReader.prototype = {
    setAutoPlay: function (e) {
      var sTop = getScrollOffset().top,
        // _self = e.target;
        _self = this;
      console.log(_self);
      if (sHeight <= wHeight + sTop) {
        console.log(1);
        return;
      }
      if (!isPlay) {
        t = setInterval(function () {
          var sTop = getScrollOffset().top;
          if (sHeight <= wHeight + sTop) {
            clearInterval(t);
            _self.style.backgroundImage = "url(img/play.png)";
            isPlay = false;
          } else {
            window.scrollBy(0, 1);
            _self.style.backgroundImage = "url(img/pause.png)";
          }
        }, 1);
        isPlay = true;
      } else {
        isPlay = false;
        clearInterval(t);
        _self.style.backgroundImage = "url(img/play.png)";
      }
    },
    sTopBtnShow: function () {
      console.log(this);

      var sTop = getScrollOffset().top,
        sTopBtn = this.sTopBtn;
      // sTop
      //   ? (this.sTopBtn.style.display = "block")
      //   : (this.sTopBtn.style.display = "none");
      sTopBtn.style.display = sTop ? "block" : "none";
    },
  };
  window.AutoReader = AutoReader;
})();
