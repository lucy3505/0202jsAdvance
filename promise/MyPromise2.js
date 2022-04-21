const PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECT = "REJECT";

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (v) => {
      if (v instanceof MyPromise) {
        v.then((x) => resolve(x), reject);
        return;
      }
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = v;
        console.log("v:", v);
        this.onFulfilledCallbacks.forEach((f) => f());
      }
    };
    const reject = (v) => {
      if (this.status === PENDING) {
        this.status = REJECT;
        this.reason = v;
        this.onRejectedCallbacks.forEach((f) => f());
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      if (this.status === REJECT) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            console.log(error);
            reject(error);
          }
        }, 0);
      }
      if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              console.log(e);

              reject(e);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }

  catch(errorCallback) {
    return this.then(null, errorCallback);
  }
  // static resolve(r) {
  //   return new MyPromise((resolve, reject) => {
  //     resolve(r);
  //   });
  // }
  // static reject(p) {
  //   return new MyPromise((resolve, reject) => {
  //     reject(p);
  //   });
  // }
}
function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<MyPromise>")
    );
  }
  let called = false;
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    console.log("x === 'object'");

    try {
      let then = x.then;
      // console.log("try:", then);
      if (typeof then === "function") {
        // console.log("then");
        then.call(
          x,
          (y) => {
            // if (called) return;
            called = true;
            console.log('then === "function"');
            resolvePromise(promise, y, resolve, reject);
          },
          (r) => {
            // if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      // if (called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
}

MyPromise.defer = MyPromise.deferred = function () {
  let deferred = {};
  deferred.promise = new MyPromise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
};
module.exports = MyPromise;
