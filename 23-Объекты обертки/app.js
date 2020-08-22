//JS использует спец. функции, которые используют объекты обертки

//prototype - объект, который содержит методы и св-ва для всех создаваемых им элементов

let str = "Hello world";
console.dir(String("hello").slice(1, -1));

const strObj = new String("hello"); //new специальный оператор, который делает из обычной функции - функцию конструктор
console.log(strObj);
console.dir(Number);
