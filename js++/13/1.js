var myLang = {
  No1: "html",
  No2: "js",
  No3: "Css",
  myStudyingLang: function (num) {
    console.log(this["No" + num]);
  },
};

myLang.myStudyingLang(2);
