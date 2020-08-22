const plus = (x = 0, y = 0) => x + y; //где в скобках аргументы, а после стрелки действие, return опущено

const plusRes = plus(1, 2);
console.log(plusRes);

// function plusFoo(x, y) {
//     return x + y;
// }

//если нет аргументов

const withoutArgm = () => console.log("Hello");

const singleArgm = x => x * 2;
//console.log(singleArgm(2));
//значение по умолчанию всегда со скобочками

const moreActions = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
};

console.log(moreActions(2, 2));

// const returnObj = (str = '') => {
//     return {
//         value: str,
//         length: str.length
//     };
// }

//сокращаем

const returnObj = (str = "") => ({
  value: str,
  length: str.length
});

//console.log(returnObj("PiPi"));

function plusFoo(x, y) {
  console.log(arguments); //хранят все объявленные аругменты в псевдомассиве.У стрелочной функции такого нет!
  return x + y;
}

plusFoo(1, 2, 3, "hello");

//Стрелочные функции не имеют своего контекста, всегда берут контекст из уровня выше. В основном используются в качестве callbackов для различных методов массивов

const exObj = {
  firstName: "Tata",
  age: 24,
  getFirstName() {
    //   console.log(this); //exObj
  },
  getAgeArrow: null,
  getAge() {
    //this.getAgeArrow = () => console.log(this);
    setTimeout(() => console.log(this));
  } //window
};

exObj.getFirstName();

exObj.getAge();
