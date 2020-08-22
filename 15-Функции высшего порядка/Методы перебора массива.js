//МЕТОД arr.forEach();

let numbers = [1, 2, 3, 4, -10, -5];

// numbers.forEach(function(item, i) {
//   // перебираем массив и изменяем каждый элемент массива с помощью функции
//   console.log(item * 10);
//    console.log(i); //счетчик система распознает сама
// });

//Метод arr.filter();

let neg = [];

for (let i = 0; i < numbers.length; i++) {
  //находим все отрицательные числа в массиве
  if (numbers[i] < 0) {
    neg.push(numbers[i]);
  }
}

console.log(neg);

let neg2 = numbers.filter(function(item) {
  return item < 0;
});

console.log(neg2);

//Метод arr.map(); для переработки массива, получаем новый массив такой же по длине

let data = ["1", "-10", "15", "-5"];

// let changedData = data.map(function(item) {
//   return parseInt(item);
// });

// console.log(changedData);

//Метод arr.every();

let allPos = true;

for (let i = 0; i < data.length; i++) {
  if (data[i] < 0) {
    // проверяем, есть ли в массиве отрицательные числа
    allPos = false;
    break;
  }
}

console.log(allPos);

let allPos2 = numbers.every(function(item) {
  return item >= 0;
});

console.log(allPos2);

//Метод arr.some();

let hasNeg = numbers.some(function(item) {
  return item < 0; // есть ли в массиве хотя бы одно отрицательное число?
});

console.log(hasNeg);

//на пустом массиве every() возвращает true, a some() возвращает false!

//Метод  reduce() - при проходе по массиву обращает внимание не только сам элемент, но и то что было до него

// пример - посчитать сумму элементов массива

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // в данном случае sum - аккумулятор
}

console.log(sum);

let sum2 = numbers.reduce(function(total, item) {
  //где total - наш аккумулятор, а item - эл-т массива
  console.log(total);
  console.log(item);
  return total + item;
}, 0); //начальное значение total

//Метод reduceRight() - справа налево рабоает

let newArr = [[1, -10], [15, 20], [5, 8], [14, 6]];

let changedNewArr = newArr.reduce(function(total, item) {
  return total.concat(item); //возвращает новый массив, состоящий из массива на котором он был вызван и соединяеющий его с другими массивами, переданными как аргумент
}, []);

console.log(changedNewArr);
