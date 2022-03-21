const LazyMan = function (name) {
  console.log(`hi i am ${name}`);
  function _eat(food) {
    console.log(`i am eating ${food}`);
  }
  const callbacks = [];
  class F {
    sleep(timeout) {
      setTimeout(() => {
        console.log(`等待了${timeout}秒..`);
        callbacks.forEach((cb) => cb());
      }, timeout);
      return this;
    }
    eat(food) {
      callbacks.push(_eat.bind(null, food));
      return this;
    }
  }
  return new F();
};
LazyMan("Tony").sleep(10).eat("lunch");
