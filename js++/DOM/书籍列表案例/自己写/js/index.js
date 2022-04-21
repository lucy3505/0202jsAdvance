(function () {
  var btn = document.getElementsByClassName("s-top-btn")[0];
  var header = document.getElementsByClassName("list-hd")[0];
  addEvent(window, "scroll", function () {
    var sTop = getScrollOffset().top;
    sTop > 0 ? (btn.style.display = "block") : (btn.style.display = "none");
  });

  addEvent(btn, "click", function () {
    window.scrollTo(0, 0);
  });
  addEvent(header, "click", function () {
    window.scrollTo(0, 0);
  });
})();
