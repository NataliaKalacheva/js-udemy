//На основе массива [1,2,3,5,8,9,10] сформировать новый массив,каждый элемент которого будет хранить информацию о числе и его четности:[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

const arr = [1, 2, 3, 5, 8, 9, 10];

const isOdd = arr.map(number => ({
  digit: number,
  odd: number % 2 !== 0
}));

//console.log(isOdd);

//Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

const numbers = [12, 4, 50, 1, 0, 18, 40];
const isNull = numbers.some(number => {
  if (number === 0) {
    return false;
  } else {
    return true;
  }
});
//console.log(isNull);

//Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

const words = ["yes", "hello", "no", "easycode", "what"];
const isLength3 = words.some(word => word.length > 3);
//console.log(isLength3);

//Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
//Напишите функцию, которая из элементов массива соберет и вернётстроку, основываясь на index каждой буквы. Например:

const data = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 }
];

function getStringFromArray(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  return arr
    .slice()
    .sort((prev, next) => prev.index - next.index)
    .reduce((acc, item) => (acc += item.char), "");
}
console.log(getStringFromArray(data));

// const sortData = data.sort((prevInd, nextInd) => prevInd.index - nextInd.index);
// //console.log(sortData);

// let str = "";
// const newString = sortData.reduce((acc, item) => {
//   acc++;
//   str = str + item.char;
//   return str;
// }, 0);

//console.log(newString);

//Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

const unsorted = [[14, 45], [1], ["a", "c", "d"], ["a", "b"], [1, 1, 1]];

const sorted = unsorted.sort((prev, next) => prev.length - next.length);
//console.log(sorted);

//Отсортировать объекты в массиве по возрастающему количеству ядер (cores).

const propertires = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },
  { cpu: "intel", info: { cores: 4, сache: 4 } },
  { cpu: "amd", info: { cores: 1, сache: 1 } },
  { cpu: "intel", info: { cores: 3, сache: 2 } },
  { cpu: "amd", info: { cores: 4, сache: 2 } }
];

const sortedProp = propertires.sort(
  (prev, next) => prev.info.cores - next.info.cores
);
//console.log(sortedProp);

// Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },
  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },
  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },
  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 }
];

function filterCollection(arr, minPrice, maxPrice) {
  let filterProducts = arr
    .slice()
    .sort((prev, next) => prev.price - next.price)
    .filter(product => product.price >= minPrice && product.price <= maxPrice);
  console.log(filterProducts);
  return filterProducts;
}

filterCollection(products, 15, 30); // [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
