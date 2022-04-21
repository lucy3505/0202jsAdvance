const PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECT = "reject";

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = "";
    this.reason = "";
    this.onFulfilledCallbacks = [];
    this.onRejectCallbacks = [];

    const resolve = (v) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = v;
        this.onFulfilledCallbacks.forEach((f) => f());
      }
    };
    const reject = (v) => {
      if (this.status === PENDING) {
        this.status = REJECT;
        this.reason = v;
        this.onRejectCallbacks.forEach((f) => f());
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
      // console.log(err);
    }
  }
  then(onFulfilled, onReject) {
    const p = new MyPromise((resolve, reject) => {});

    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECT) {
      onReject(this.reason);
    }
    if (this.status === PENDING) {
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectCallbacks.push(() => onReject(this.reason));
    }
    return p;
  }
}
module.exports = MyPromise;
