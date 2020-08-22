// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) →
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

function getObj(x, y, ...others) {
  const [...arg] = arguments;
  return {
    first: x,
    other: [y,...others],
  };
}

// console.log(getObj("value", 1, 2, 3, 4));

// Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"]
  }
};

function getInfo({
  name,
  info: {
    partners: [first, second]
  }
}) {
  return console.log({
    Name: name,
    Partners: [first, second]
  });
}

getInfo(organisation);
// Name: Google
// Partners: Microsoft Facebook
