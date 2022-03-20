function sunSched() {
  var sunSched = "";
  var operation = {
    setsched: function (thing) {
      sunSched = thing;
    },
    showSched: function () {
      console.log("my schedule on sunday is " + sunSched);
    },
  };
  return operation;
}

var sunSched = sunSched();
sunSched.setsched("studying");
sunSched.showSched();
