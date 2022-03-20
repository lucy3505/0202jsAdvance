function Car() {
  var this = {
    _proto_: Car.prototype,
  };
}
Car.prototype =new Object()
Car.prototype.constructor=Car;
Car.prototype = { constructor: Car  ,_proto_:{constructor:Object}};


var obj=new Object()
obj._proto_=Object.prototype
obj._proto_={constructor:Object,_proto_:null,hasOwnProperty....}