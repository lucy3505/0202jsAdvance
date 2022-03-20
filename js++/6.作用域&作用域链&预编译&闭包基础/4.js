function breadMgr(num) {
  var breadNum = num || 10;
  function supply() {
    breadNum += 10;
    console.log(breadNum);
  }
  function sale() {
    breadNum--;
    console.log(breadNum);
  }
  return [supply, sale];
}

var breadMgr = breadMgr(50);
breadMgr[0]();
breadMgr[1]();
