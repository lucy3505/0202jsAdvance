var oBtn = document.querySelector("button");
const handler1 = () => {
  console.log(1);
};
const handler2 = () => {
  console.log(2);
};
const handler3 = () => {
  console.log(3);
};

oBtn.addEventListener("click", handler1, false);
oBtn.addEventListener("click", handler2, false);
oBtn.addEventListener("click", handler3, false);

class EventEmitter {
  handlers = {};
  on(type, handler, once) {
    if (!this.handlers[type]) {
      this.handlers[type] = [];
    }
    if (!this.handlers[type].includes(handler)) {
      this.handlers[type].push(handler);
      handler.once = once;
    }
  }
  once(type, handler) {
    this.on(type, handler, true);
  }
  off(type, handler) {
    this.handlers[type] = this.handlers[type].filter((h) => {
      return h !== handler;
    });
  }

  trigger(type) {
    if (this.handlers[type]) {
      this.handlers[type].forEach((h) => {
        h();
        if (h.once) {
          this.off(type, h);
        }
      });
    }
  }
}

const ev = new EventEmitter();
ev.on("test", handler1, true);
ev.on("test", handler2);
// ev.on("test", handler3);

ev.trigger("test");
ev.trigger("test");
