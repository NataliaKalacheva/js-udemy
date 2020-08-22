let obj1 = {
  name: "Tata",
  info: {
    skills: ["html", "css"]
  }
};

let obj2 = {
  name: "Ivan",
  age: 24
};

// // let newObj = obj1; // скопировали ссылку на объект. при изменении newObj наш obj1 тоже изменится

// let newObj = Object.assign({}, obj1, obj2); //совместит два объекта
// console.log(newObj === obj1); //false, изменения в одном объекте не приведут к изменению другого

// console.log(newObj);

// let copyObj = Object.assign(obj2, obj1); //убрали скобки, и теперь новый объект ссылается на первый объект. При этом, второй объект скопирован.
// console.log(copyObj === obj1); //true - изменения в одном, приведут к изменению другого.
// console.log(copyObj);

// console.log(obj1); //теперь первый тоже получил возраст, хотя его не было. При этом если есть одинаковые значения ключей, присвоится последний! Порядок важен!

let newObj = Object.assign({}, obj2, obj1);
newObj = Object.assign({}, obj1);
console.log(newObj === obj1); //false
console.log(newObj.info === obj1.info); //true если есть вложенные объекты, они копируются по ссылке!!

//ГЛУБОКОЕ КОПИРОВАНИЕ
console.log(JSON.stringify(obj1));

// let objJSON = JSON.stringify(obj1); //переводим в JSON формат

// newObj = JSON.parse(objJSON); //распарсили из формата в объект

newObj = JSON.parse(JSON.stringify(obj1)); //короткая запись

console.log(newObj.info === obj1.info); //false

//obj.keys

let keys = Object.keys(obj2);
console.log(keys); // получаем массив из всех ключей объекта

//obj.values

let values = Object.values(obj2);
console.log(values); //массив  из всех значений объекта

//obj.entries

let entries = Object.entries(obj2);
console.log(entries); // получаем массив массивов, где каждый элемент - пара ключ значение

//obj.fromentries

let fromEntries = Object.fromEntries([["a", "value"], ["b", "b-value"]]);
console.log(fromEntries); //получаем объект из массива массивов
