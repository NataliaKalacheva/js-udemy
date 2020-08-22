// const User = {
//     name: 'Tata',

//     getName() {
//         return this.name;
//     },
//     setName() {
//         this.name = name;
//     }
// }
// все св-ва публичные. С помощью замыкания можно создать некую приватность.

// function User(name) {
//   let userName = name;

//   return {
//     getName() {
//       return userName;
//     },
//     setName(name) {
//       userName = name;
//     }
//   };
// }

// const tata = new User("Tata");

// само имя от нас скрыто, но доступны функции для работы с ним
// но мы можем изменять сами методы и переопределять, это можно исправить с помощью Object.freeze

// function User(name) {
//   let userName = name;

//   return Object.freeze({
//     getName() {
//       return userName;
//     },
//     setName(name) {
//       userName = name;
//     }
//   });
// }

// const tata = new User("Tata");

function User(name) {
  const symbol = Symbol(); // функция возвращает уникальный идентификатор

  return {
    [symbol]: name,
    getName() {
      return this[symbol];
    },
    setName(name) {
      this[symbol] = name;
    }
  };
}

const denis = new User("Denis");
