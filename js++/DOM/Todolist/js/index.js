init();
function init() {
  initTodoList;
}

var initTodoList = (function () {
  var showInput = document.getElementsByClassName("j-show-input")[0],
    inputWrap = document.getElementsByClassName("input-wrap")[0],
    addItem = document.getElementsByClassName("j-add-item")[0],
    textInput = document.getElementById("textInput"),
    oList = document.getElementsByClassName("j-list")[0],
    isEdit = false,
    curIdx = null,
    inputShow = false;
  addEvent(showInput, "click", function () {
    if (inputShow) {
      inputWrap.style.display = "none";
      inputShow = false;
    } else {
      inputWrap.style.display = "block";
      inputShow = true;
    }
  });

  addEvent(addItem, "click", function () {
    var val = textInput.value,
      oItems = document.getElementsByClassName("item"),
      itemLen = oItems.length,
      item,
      len = val.length;
    if (len === 0) {
      return;
    }

    for (var i = 0; i < itemLen; i++) {
      item = elemChildren(oItems[i])[0];
      var text = item.innerText;
      if (val === text) {
        alert("已存在此项目");
        return;
      }
      console.log(item);
    }
    if (isEdit) {
      var itemContent = elemChildren(oItems[curIdx])[0];
      itemContent.innerText=
    } else {
      var oLi = document.createElement("li");
      oLi.className = "item";
      oLi.innerHTML = itemTpl(val);
      oList.appendChild(oLi);
      textInput.value = "";
      inputWrap.style.display = "none";
      inputShow = false;
    }
  });

  addEvent(oList, "click", function (e) {
    var e = e || window.event,
      tar = e.target || e.srcElement,
      oItems = document.getElementsByClassName("item"),
      className = tar.className;
    if (className.includes("edit-btn")) {
      var itemLen = oItems.length,
        liParent = elemParent(tar, 2),
        tarIdx = Array.prototype.indexOf.call(oItems, liParent),
        item;

      isEdit = true;

      inputShow = true;
      inputWrap.style.display = "block";
      for (var i = 0; i < itemLen; i++) {
        item = oItems[i];
        item.className = "item";
      }
      liParent.className += " active";
      curIdx = tarIdx;
      addItem.innerHTML = `编辑第${tarIdx + 1}项`;
    }
    if (className.includes("remove-btn")) {
      elemParent(tar, 2).remove();
    }
  });

  function itemTpl(text) {
    return `<p class="item-content">${text}</p><div class="btn-group">
    <a href="javascript:;" class="fa fa-edit edit-btn"></a>
    <a href="javascript:;" class="fa fa-times remove-btn"></a>
    </div>`;
  }
})();
var tpl = document.getElementById("listTpl");
console.log(tpl);
console.log(tpl.innerHTML);
