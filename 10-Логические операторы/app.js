// >, <, >=, <=, ==, ===, !=, !==

let value;

value = 1 > 2;
value = 2 <= 2;
value = 1 == 1;
value = 1 == '1';
value = 1 === '1';
value = 1 != '1'; // нестрогое сравнение НЕ. вернет false, т.к. они равны, строка приведется к числу
value = 1 !== '1'; //строгое сравнение НЕ. Вернет true, т.к. они не равны(по типу данных)
value = 'a' > 'a'; //false, они равны в числовом представлении utf
value = 'a' === 'a'; //true
value = 'a' > 'A'; //true
value = 'a' > 'ab'; //false, т.к. 'ab' больше символов 
value = 'A'.charCodeAt(); // возвращает числовое значение символа, юникод

// console.log(value);

// if (условие) {
//   // actions
// } else {
//   // else actions
// }

value = 10;

// if (value !== 10) {
//   console.log('value: 10');
// } else {
//   console.log('else');
// }

// value = 100;

// if (value) {
//   console.log('some actions', value);
// } else {
//   console.log('else', value);
// }

// ||(и) &&(или) !(не) 
// value = null;

// if (!value) {
//   console.log(value);
// }

// value = [1];

// if (value.length) { // если не 0, то true
//   console.log(value);
// } else {
//   console.log('array is empty');
// }

// value = null

// if (Array.isArray(value)) { //массив?
//   console.log(value);
// } else {
//   console.log('array is empty');
// }


// let user = {
//   name: null
// };

// if (user.hasOwnProperty('name')) { //есть ли у объекта такое свойство? Да, ключ есть, но все равн какое значение(м.б.пустым)
//   console.log(user.name);
// } else {
//   console.log('else');
// }

// || &&
// value = 1 || 0 || null; //или оператор да, он останавливается на правде. value=1!если оперант преобразовывается к тру - возвращает его.



// let age = 10;

// if (age < 16 || age > 65) {
//   console.log('some actions');
// } else {
//   console.log('else');
// }

// let serverNickname = ''; //воображаемые никнейм с сервера
// let nickname = serverNickname || 'default nickname'; //если значение есть, то он его запишет, если нет - то вернет второе

// console.log(nickname);

// value = 1 && 2 && 3; //всегда старается вернуть false, если ни одного false Не вернет, возвращает последнее тру
// console.log(value); // 3
// value = 1 && 0 && 3; /
// console.log(value); //0

// productPrice = 10;

 if (productPrice >= 5 && productPrice <= 20) {
   console.log('беру');
 } else {
   console.log('else');
 }
 console.log(value);

value = 10;

if (value < 10) {
  console.log('value < 10', value);
} else if (value >= 10) {
  console.log('value >= 10', value);
} else {
  console.log('else');
}