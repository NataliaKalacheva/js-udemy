// Разбить сложные структуры на более простые/объекты, массивы, функции

const user = {
  firstName: "Tata",
  lastName: "Kalacheva",
  age: 40,
  info: {
    work: "EasyCode",
    skills: ["html", "css"]
  }
};

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { firstName: newName, lastName, age = 30 } = user;
// console.log(firstName); //Tata. вытянули св-ва из объекта

// console.log(age); // вытягиваем свойство, если его нет в объекте - выводится дефолтное
// console.log(newName); // получили firstName под новой переменной, под firstName теперь недоступен

const {
  info: { work, skills }
} = user;
// console.log(info); //получили объект
// console.log(skills);

//Деструктуризация массивов

const colors = ["white", "blue", "red", "#894553"];

const [w, bl, red, gr = "green"] = colors; //переменные можно называть как угодно, но по порядку
// console.log(w, bl, red, gr);

const names = ["Tata", "Gosha", "Lena"];
// const [, name2, name3] = names; //пропускаем элемены за счет запятых
// console.log(name2, name3);

const nastedArr = ["hello worls", ["key", "value"]];
const [, [key, value]] = nastedArr; //деструктурируем вложенный массив
// console.log(key, value);

//Оператор rest позволяет получить остаток от массивов, используется при копировании

const [name1, ...otherNames] = names;
// console.log(name1);
// console.log(otherNames); // массив оставшихся элементов, всегда должен быть в конце

// const [...newNames] = names; //получаем новый массив имен
const newNames = [...names]; //скопировали массив(неглубокое копирование)
// console.log(newNames); // в консоли массив
// console.log(...newNames); //все элементы выводятся в консоль как отдельные

const colorNames = [...colors, ...names];
// console.log(colorNames); //общий массив(типа конкатенация массивов)

const newUser = { ...user, age: 30 }; //копируемый объект, изменяемое свойство
// console.log(newUser); //поверхностная копия объекта и вложенные объекты храняться ссылкой

const {
  info: {
    skills: [html, css] //деструктуризация вложенных элементов
  }
} = newUser;

// console.log(html, css);

function myPerson({
  lastName = "%",
  firstName = "%",
  info: { skills } = {}
} = {}) {
  console.log(lastName, firstName, skills);
}

myPerson(newUser);

function foo(x, y, ...others) {
  //   console.log(arguments); //псевдомассив аргументов, итеррируемая коллекция

  //   console.log([].slice.call(arguments)); //сделали из итерируемой коллекции массив

  //   console.log(Array.prototype.slice.call(arguments)); //эквивалетная запись предыдущей

  const [...args] = arguments;
  console.log(args); //более короткий вариант  с
}

foo(1, 2, 5, 6);

const numbers = [2, 3, 4, 5, 6];

function foo2(x, y, ...others) {
  console.log(x, y, ...others);
}

// foo2(numbers[0], numbers[1]);
//альтернатива

foo2(...numbers);
