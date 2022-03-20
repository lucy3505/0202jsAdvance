var b = 3;
console.log(a); //function a
function a(a) {
  console.log(a); //funcion a
  var a = 2;
  console.log(a); //2
  function a() {
    var b = 5;
    // console.log(b); //5
  }
}

a(1);
