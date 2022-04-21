(function () {
  var Tab = function (opt) {
    const { tabItem, pageItem, pageActive, tabActive } = opt;
    this.tabClassName = tabItem;
    this.tabItem = document.getElementsByClassName(tabItem);
    this.pageClassName = pageItem;
    this.pageItem = document.getElementsByClassName(pageItem);
    this.pageActive = pageActive;
    this.tabActive = tabActive;
    debugger;
    this.bindEvent();
  };
  Tab.prototype = {
    bindEvent() {
      for (var i = 0; i < this.tabItem.length; i++) {
        var tabItem = this.tabItem,
          pageItem = this.pageItem,
          pageActive = this.pageActive,
          tabActive = this.tabActive,
          tabClassName = this.tabClassName,
          pageClassName = this.pageClassName;
        (function (k) {
          console.log(this); //这里匿名函数自执行里面的this指向window
          tabItem[k].onclick = function () {
            for (var j = 0; j < tabItem.length; j++) {
              tabItem[j].className = tabClassName;
              pageItem[j].className = pageClassName;
            }
            this.className += ` ${tabActive}`;
            pageItem[k].className += ` ${pageActive}`;
          };
        }.bind(this)(i));
      }
    },
  };

  window.Tab = Tab;
})();
