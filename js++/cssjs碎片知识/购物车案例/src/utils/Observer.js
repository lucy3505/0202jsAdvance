export default class Observer {
  constructor() {
    this.observers = [];
  }
  add(fn) {
    if (typeof fn === "function") {
      this.observers.push(fn);
    }
  }
  notify(...args) {
    this.observers.forEach((observe) => {
      observe.call(...args);
    });
  }
}
