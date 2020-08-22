// console.log(Math.PI.toFixed(2)); //Получить число pi из Math и округлить его до 2-х знаков после точки

// console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));
// console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));//Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

// var randomNumber = Math.random();
// console.log(randomNumber.toFixed(2)); //Получить случайное число и округлить его до двух цифр после запятой

// console.log(Math.random() * 20);//Получить случайное целое число от 0 до X. X - любое произвольное число.

// console.log((0.6 + 0.7).toFixed(1));//Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)

// console.log(parseInt('100$'));//Получить число из строки ‘100$’

let string = "some test string";

//1)
string[0];
string[string.length - 1];
// или
string.charAt(0);
string.charAt(string.length - 1);

//2)
string =
  string[0].toUpperCase() +
  string.substring(1, string.length - 1) +
  string[string.length - 1].toUpperCase();

//3)
string.indexOf("string");

//4)

string.indexOf(" ", string.indexOf(" ") + 1);
// или
string.lastIndexOf(" "); // второй пробел яв-ся последним

//5)
string.substring(5, 9);
string.slice(5, 9);

//7)
let str = string.slice(0, string.length - 6);

//8)
let a = 20;
let b = 16;
a.toString() + b.toString();
