const firstName = 'Denis';
const lastName = 'Mescheryakov';
const age = 30;
const str = 'Hello my name is Denis';

let value;

value = firstName + lastName;
value = firstName + ' ' + lastName;
value += ' I am ' + age;

value = firstName.length;
value = firstName[2];
value = firstName[4];
value = lastName[lastName.length - 1];
value = firstName[firstName.length - 1];

value = firstName.toUpperCase();
value = firstName.concat(' ', lastName);

value = str.indexOf('n', 10);
value = str.indexOf('!');
value = str.includes('DENIS'); //чувствителен к регистру, вернет -1

value = str.slice(0, 5); //вырезает из строки данные по индексу с 0 включительно до 5(не включая)
value = str.slice(0, -3); // с начала до конца(3 символа с конца не учитывает)

value = str.replace('Denis', 'Den'); //заменяем данные в строке с Денис на Ден


console.log(value);

string[0];
string[string.length-1];

