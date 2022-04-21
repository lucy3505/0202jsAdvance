const PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECT = "REJECT";

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFullfilledCallbacks = [];
    this.onRejectCallbacks = [];

    const resolve = function (v) {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = v;
        this.onFullfilledCallbacks.forEach((f) => f());
      }
    }.bind(this);
    const reject = (v) => {
      if (this.status === PENDING) {
        this.status = REJECT;
        this.reason = v;
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFullfilled, onReject) {
    if (this.status === FULFILLED) {
      onFullfilled(this.value);
    }
    if (this.status === REJECT) {
      onReject(this.reason);
    }
    if (this.status === PENDING) {
      this.onFullfilledCallbacks.push(() => {
        onFullfilled(this.value);
      });
      this.onRejectCallbacks.push(() => {
        onReject(this.reason);
      });
    }
  }
}

module.exports = MyPromise;
