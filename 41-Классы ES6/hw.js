class Component {
  constructor(tagName = "div") {
    this.tagName = tagName;
    this.node = document.createElement(tagName);
  }
  setText(text) {
    this.node.textContent = text;
  }
}

const comp = new Component("span");

class Calc {
  constructor(startValue) {
    this._value = startValue;
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    return (this._value = newValue);
  }
  plus(x) {
    return x + this._value;
  }
  minus(x) {
    return this._value - x;
  }
  multiply(x) {
    return this._value * x;
  }
  division() {
    return this._value / x;
  }
}

const calculate = new Calc(5);
