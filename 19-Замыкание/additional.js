var x = 10; // free variable within scope of foo and bar

function foo() {
  var y = 20; // free variable within scope of bar

  function bar() {
    var z = 15; // not a free vairable, local variable
    var output = x + y + z;
    return output;
  }
  //console.log(bar()); 45
  return bar;
}

// chain of scope
foo();

function getCounter() {
  let counter = 0;
  return function() {
    return counter++;
  };
}

let count = getCounter(); // храним ссылку на анонимную внутреннюю функцию, которую возвращает getCounter().Получаем функцию count(), которая представляет собой замыкание и может обращаться к окружению getCounter(), даже если та завершила работу

// console.log(count()); //0
// console.log(count()); //1
// console.log(count()); //2

//т.к. переменная counter объявлена в области видимости getCounter(), ее значение между вызовами count() сохраняется, не сбрасываясь в 0

function person() {
  let name = "Peter";

  return function displayName() {
    console.log(name);
  };
}

let peter = person();
peter();

const counter = (function() {
  let i = 0;
  return function() {
    return ++i;
  };
})();

counter; // function () { return ++i; }

const price = (function() {
  let discount = 0,
    price = 0;
  function setDiscount(value) {
    discount = parseInt(value);
  }

  function getPriceWithDiscount() {
    const discountFromPrice = (price * discount) / 100;
    return price - discountFromPrice;
  }

  function setPrice(value) {
    return (price = value);
  }

  function getPrice() {
    return price;
  }

  return {
    getPriceWithDiscount: getPriceWithDiscount,
    setDiscount: setDiscount,
    setPrice: setPrice,
    getPrice: getPrice
  };
})();
price.setPrice(50);
console.log(price.getPrice());

price
  .setPrice(30)
  .setDiscount(15)
  .getPriceWithDiscount();
