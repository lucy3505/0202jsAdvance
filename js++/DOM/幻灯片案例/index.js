// (function (document) {
//   var slider = document.querySelector(".slider");
//   var thumb = document.querySelector(".thumbs-list");
//   var sliderList = slider.querySelectorAll(".slider-item");
//   var thumbList = thumb.querySelectorAll(".thumb-item");
//   function init() {
//     bindEvent();
//   }

//   function bindEvent() {
//     thumbList.forEach((item) => {
//       item.addEventListener("click", handleClick, false);
//     });
//   }

//   function handleClick() {
//     console.log(this);
//     for (var i = 0; i < thumbList.length; i++) {
//       thumbList[i].className = "thumb-item";
//       sliderList[i].className = "slider-item";
//     }
//     let curIndex = [].indexOf.call(thumbList, this);
//     console.log(curIndex);
//     this.className += " cur";
//     sliderList[curIndex].className += " active";
//   }
//   init();
// })(document);

// (function (document) {
//   var slider = document.querySelector(".slider");
//   var thumb = document.querySelector(".thumbs-list");
//   var sliderList = slider.querySelectorAll(".slider-item");
//   var thumbList = thumb.querySelectorAll(".thumb-item");

//   for (var i = 0; i < thumbList.length; i++) {
//     (function (k) {
//       thumbList[i].onclick = function () {
//         for (var j = 0; j < sliderList.length; j++) {
//           sliderList[j].className = "slider-item";
//           thumbList[j].className = "thumb-item";
//         }
//         this.className += "cur";
//         sliderList[k].className += " active";
//       };
//     })(i);
//   }
// })(document);

// (function (document) {
//   var slider = document.querySelector(".slider");
//   var thumb = document.querySelector(".thumbs-list");
//   var sliderList = slider.querySelectorAll(".slider-item");
//   var thumbList = thumb.querySelectorAll(".thumb-item");
//   var startIndex = "0";
//   function init() {
//     bindEvent();
//     start(startIndex);
//   }

//   function start(index) {
//     handleClick(1, index);
//   }

//   function bindEvent() {
//     thumbList.forEach((item) => {
//       item.addEventListener("click", handleClick, false);
//     });
//   }

//   function handleClick(e, index) {
//     var _self = index ? thumbList[index] : this;
//     console.log(_self);
//     for (var i = 0; i < thumbList.length; i++) {
//       thumbList[i].className = "thumb-item";
//       sliderList[i].className = "slider-item";
//     }
//     let curIndex = [].indexOf.call(thumbList, _self);
//     console.log(curIndex);
//     _self.className += " cur";
//     sliderList[curIndex].className += " active";
//   }
//   init();
// })(document);

(function () {
  var Slider = function (opt) {
    const { sliderItem = ".slider-item", thumbItem = ".thumb-item" } = opt;
    this.sliderItem = document.querySelectorAll(sliderItem);
    this.thumbItem = document.querySelectorAll(thumbItem);
    this.bindClick();
  };

  Slider.prototype = {
    bindClick: function () {
      var sliderList = this.sliderItem,
        thumbList = this.thumbItem;
      for (var i = 0; i < thumbList.length; i++) {
        (function (k) {
          thumbList[i].onclick = function () {
            for (var j = 0; j < sliderList.length; j++) {
              sliderList[j].className = "slider-item";
              thumbList[j].className = "thumb-item";
            }
            this.className += "cur";
            sliderList[k].className += " active";
          };
        })(i);
      }
    },
  };

  window.Slider = Slider;
})();
