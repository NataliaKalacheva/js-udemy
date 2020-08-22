const firstName = 'Denis';
const lastName = 'Mescheryakov';
const age = 30;

let str;

str = 'Hello my name is ' + firstName + ' ' + lastName;

str = '<ul>' +
      '<li>First name: ' + firstName + '</li>' +
      '<li>Last name: ' + lastName + '</li>' +
      '<li>Age: ' + age + '</li>' +
      '</ul>';

// console.log(str);

// ES6
//ШАБЛОННЫЕ СТРОКИ
//новый формат объявления строки с возможностью добавления в них переменных - косые строки. ${ имя переменной }. Пробелы читаются как пробелы.
str = `  
  <ul>
    <li>First name: ${ firstName }</li>
    <li>Last name: ${ lastName }</li>
    <li>Age: ${ age }</li>
    <li>Math.random: ${ Math.random() }</li>
    <li>5 + 5: ${ 5 + 5 }</li> 
  </ul>
`; //Внутри можно проводить мат. операции, использовать методы. 

document.body.innerHTML = str; //innerHTML - разметка, которая находится в Body. Добавляем код

