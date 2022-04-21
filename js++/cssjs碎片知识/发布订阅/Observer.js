/**
 * 目标
 * 要完成任务->又要完成另一类任务
 *
 * 观察者->观察一个目标是否要做它自己的任务
 *        做这个目标任务相关联的任务
 *
 */

/**
 * 用户名，密码，年龄，性别  data
 *
 * 任何一个数据都有可能改变或者被访问
 *
 * 我都要进行日志保存和打印
 *
 */

class Target {
  constructor(data) {
    this.data = data;
    this.observer = new Observer("#list");
    this.init();
  }
  init() {
    this.validateDate(this.data);

    this.proxyData();
  }
  validateDate(data) {
    const { username, password, age, gender } = data;
    username.length < 6 && (data.username = "");
    password.length < 6 && (data.password = "");
    typeof age !== "number" && (data.age = 0);
    !["male", "female"].includes(gender) && (gender = "male");
  }
  proxyData() {
    const _this = this;
    for (let key in this.data) {
      Object.defineProperty(this, key, {
        get() {
          console.log(this);
          this.observer.updateLog("get", key, _this.data[key]);
          debugger;
          return _this.data[key];
        },
        set(newValue) {
          this.observer.updateLog("set", key, _this.data[key], newValue);
          _this.data[key] = newValue;
        },
      });
    }
  }
}

class Observer {
  constructor(el) {
    this.el = document.querySelector(el);
    this.logPool = [];
  }
  updateLog(type, key, oldValue, newValue) {
    switch (type) {
      case "get": {
        this.getProp(key, oldValue);
        break;
      }
      case "set": {
        this.setProp(key, oldValue, newValue);
        break;
      }
      default:
        break;
    }
  }

  getProp(key, value) {
    const o = {
      type: "get",
      dateTime: new Date(),
      key,
      value,
    };
    this.logPool.push(o);
    debugger;
    this.log(o);
  }
  setProp(key, oldValue, newValue) {
    const o = {
      type: "set",
      dateTime: new Date(),
      key,
      oldValue,
      newValue,
    };
    this.logPool.push(o);
    this.log(o);
  }

  log(o) {
    const { type, key, dateTime } = o;
    const oLi = document.createElement("li");
    let htmlStr = "";

    switch (type) {
      case "get": {
        htmlStr = `${dateTime}:I  got the key ${key},the value of the key is ${o.value}`;
        break;
      }
      case "set": {
        htmlStr = `${dateTime}:I set the  ${key}'s value ${newValue} from ${oldValue}`;
        break;
      }
      default:
        break;
    }
    oLi.innerHTML = htmlStr;
    this.el.appendChild(oLi);
    console.log(this.logPool);
  }
}
