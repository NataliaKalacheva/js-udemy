//Замыкание - одна из фундаментальных вещей в JS
// это функция, которая ссылается на свободные переменные. Свободные переменные - те, которые не были переданы в кач-ве аргументов, и не были объявлены внутри функции.

//функция запоминает свое окружение, и имеет к нему доступ, а так же может получать доступ к окружению родителей и т.д.

function getFullName(firstName, lastName) {
  return function() {
    return `${firstName} ${lastName}`;
  };
}

const getName = getFullName("Tata", "Kalacheva");
//console.log(getName); //хранится функция, которая в случае вызова вернет строку с переданными аргументами

//console.log(getName()); //вызывли и получили tata kalacheva

function updateValue(val = 0) {
  let x = val;
  return function(num = 0) {
    return (x += num); //функция изменяет x, объявленный в родительской функции
  };
}

const updateVal = updateValue(2);
const updateVal2 = updateValue(4);
// console.log(updateVal(1)); //получаем 3
// console.log(updateVal(0)); //все езе 3, функция запомнила окружение

// console.log(updateVal2(2)); //6
// console.log(updateVal2(0)); //6

// При каждом вызове - создается новый контекст исполнения и новое лексическое окружение

function checkCred() {
  const login = "test";
  const password = "somePassword";

  return {
    checkLogin(value) {
      return login === value;
    },
    checkPassword(value) {
      return login === value;
    }
  };
}
const check = checkCred();
console.log(check); //вернул объект с 2мя методами

console.log(check.checkLogin("test")); //true

console.log(check.checkPassword("abrakadabra")); //false

//Переменные, котороые были объявлены и используются в замыкании будут храниться в памяти, и не очищаются,т.к. есть связь между ними и фукциями, которые имеют к ним доступ

function closureExample() {
  const arrOfFunc = [];
  let value = "";

  for (let i = 0; i < 10; i++) {
    value += i;
    arrOfFunc.push(function() {
      console.log(value, i);
    });
  }
  // console.log(arrOfFunc);
  return arrOfFunc;
}

const res = closureExample(); // получаем 10 функций, каждая из которых ссылается к value и к i

res[0](); //0123456789 0
res[5](); //0123456789 5

//i получаем правильное, а значения value - все, что были в цикле. т.к. цикл уже закончился и value полностью заполнен.

//let имеет блочную область видимости, поэтому каждый раз i создается заново на каждой итерации .Блоком явл-ся {}  в рамках цикла.Все сломается, если будет var(тогда везде будет 10), т.к. var используют эффект хостинга - всплывают.
