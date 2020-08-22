function getThis() {
  console.log(this);
}
//getThis(); // this определяются при вызове функции, сейчас ссылается на объект Window в глобальной области. В строгом режиме undefined.

//console.log(window.getThis);

//Мы можем использовать функцию  в кач-ве метода объекта. В этом случае this указвает на этот объект.

function getPrice(currency = "$") {
  // выводя функцию из объекта, делаем ее универсально применимой к разным объектом
  console.log(currency + this.price); // в глобальном смысле undefined, т.к. у window нет св-ва price
}

function getName() {
  console.log(this.name);
  return this;
}

const prod1 = {
  name: "Intel",
  price: 100,
  getName,
  getPrice,
  info: {
    information: ["2.3ghz"],
    getInfo: function() {
      console.log(this);
    }
  }
};

//prod1.getPrice();
//prod1.info.getInfo();
//this равен значению перед самой правой точкой

const prod2 = {
  name: "AMD",
  price: 50,
  getPrice
};

//prod2.getPrice(); //вызываем универсальную функцию
// prod1.getName();
// prod2.getName = prod1.getName; //передали функцию в другой объект
// prod2.getName();

let str = "Hello world";
const reverseStr = str
  .split("") // разбили строку на массив
  .reverse() // перевернули массив
  .join(""); // преобразовали обратно в строку
//console.log(reverseStr);

// каждый из методов возвращает объект, у которого есть следующий метод. у строки есть сплит - возвращает массив и у него есть реверс - реверс возвращает массив, у которого есть метод join.

//если я вызову метод, которого нет у предыдущего объекта  - будет ошибка, что метод - is not a function

const prod3 = {
  name: "Samsung",
  price: 200,
  getPrice
  //   getName
};

// prod3
//   .getName() // без return возвращает undefined
//   .getPrice(); // у undefined невозможно применить метод - ошибка! Но если мы изменим в функции на return this -  То фактически мы вызовем prod3.getPrice()

// //таким образом строятся цепочки вызовов методов

//getPrice.call(prod3, "*"); //метод call используется для функций, в качестве аргумента передаем this. Таким образом, мы задали контекст выполнения функции. Мы можем передавать другие аргументы, но первым всегда идет this.

//МЕТОД apply - принимает массив

//getPrice.apply(prod3, ["*"]);

//const getPriceBund = prod3.getPrice.bind(prod3); // метод bind передает функцию с переданным контекстом. контекст навсегда остается привязанным

setTimeout(prod3.getPrice, 1000); //$undefined, т.к. setTimeout работает в контексте window

setTimeout(prod3.getPrice.bind(prod3)); //$200, тк передали контекст
