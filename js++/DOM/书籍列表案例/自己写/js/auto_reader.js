(function () {
  var AutoReader = function (opt) {
    this.playBtn = opt.playBtn;
    this.sTopBtn = opt.sTopBtn;
    this.playing = false;
    this.init();
    this.t = null;
  };

  AutoReader.prototype = {
    init() {
      this.bindEvent();
    },
    bindEvent() {
      const _self = this;
      // debugger;
      addEvent(window, "scroll", this.scrollEvent.bind(_self));
      addEvent(this.sTopBtn, "click", this.scrollToTopEvent.bind(_self));
      addEvent(this.playBtn, "click", this.clickPlayBtn.bind(_self));
    },
    scrollEvent() {
      var sTop = getScrollOffset().top;
      this.sTopBtn.style.display = sTop > 0 ? "block" : "none";
    },
    scrollToTopEvent() {
      window.scrollTo(0, 0);
      clearInterval(this.t);
      this.playing = false;
      this.playBtn.style.backgroundImage = `url(img/play.png)`;
    },
    clickPlayBtn() {
      var playing = this.playing;
      this.playing = !this.playing;
      var innerHeight = getViewportSize().height;
      var scrollHeight = getScrollSize().height;
      this.playBtn.style.backgroundImage = playing
        ? `url(img/play.png)`
        : `url(img/pause.png)`;

      if (playing) {
        clearInterval(this.t);
        return;
      }
      if (!playing) {
        this.t = setInterval(() => {
          var scrollTop = getScrollOffset().top; //!!
          if (innerHeight + scrollTop >= scrollHeight) {
            clearInterval(this.t);
            this.playBtn.style.backgroundImage = `url(img/play.png)`;
            this.playing = false;
            return;
          }
          window.scrollBy(0, 1);
        }, 1);
      }
    },
  };

  window.AutoReader = AutoReader;
})();
