var test = function (fn) {
  return doSth(function (data) {
    return fn(data);
  });
};

function doSth(fn) {
  fn();
}
fn(data)=>function(data){return fn(data)}()

var test=function(fn){
return doSth(data)
}

var test=function(fn){
  fn(data)
}

//化简：从里往外分析
var test=fn(data)