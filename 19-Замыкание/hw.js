//1
function minus(x = 0) {
  return function(y = 0) {
    return x - y;
  };
}

// console.log(minus(10)(6));
// console.log(minus(5)(6));
// console.log(minus(10)());
// console.log(minus()(6));
// console.log(minus()());

//2

function multiplyMaker(x) {
  var value = x;
  return function(x) {
    return (value *= x);
  };
}

const multiply = multiplyMaker(2);

// console.log(multiply(2)); //4
// console.log(multiply(1)); //4
// console.log(multiply(3)); //12
// console.log(multiply(10)); //120

//3
const string = (function() {
  let str = "";

  function setStr(value = "") {
    return (str = String(value));
  }

  function getStr() {
    return str;
  }

  function getStrLength() {
    return str.length;
  }

  function reverseString() {
    return str
      .split("")
      .reverse()
      .join("");
  }
  return {
    setStr: setStr,
    getStr: getStr,
    getStrLength: getStrLength,
    reverseString: reverseString
  };
})(); // сохраняем в переменную результат самовызывающейся функции - получаем модуль

// console.log(string.setStr("abcde"));
// console.log(string.reverseString("abcde"));
// console.log(string.getStr());
// console.log(string.getStrLength("cat"));

const calc = (function() {
  let value = 0;
  function setValue(number) {
    value = number;
    return value;
  }
  function plus(number) {
    return (value += number);
  }
  function multiply(number) {
    return (value *= number);
  }
  function getValue() {
    return Math.round(value);
  }

  return {
    setValue: setValue,
    plus: plus(),
    multiply: multiply,
    getValue: getValue
  };
})();

// console.log(calc.setValue(10)); //10
// console.log(calc.plus(5)); //15
// console.log(calc.multiply(2)); //30
// console.log(calc.getValue());
// calc.setValue(5).plus(3);
