const numArr = [2, 32, 1234, 54, 323];

let value;

value = numArr.length;
// numArr.length = 0;
// numArr.length = 100;

value = Array.isArray(numArr); //true (проверка, что есть массив)
value = numArr[2]; //получаем элемент по индексу
numArr[2] = 12; // перезаписываем значение элемента

//МЕТОДЫ МАССИВА
value = numArr.indexOf(32); // передаем искомый элемент - получаем его индекс

value = numArr.push(100); //добавляет в конец
value = numArr.pop(); // удаляет с конца
value = numArr.unshift(111); // добавляет в начало
value = numArr.shift(); // удаляет сначала элемент и возвращает его
value = numArr.slice(0, 2); // обрезает со стратового до n-ого не включая последний
value = numArr.splice(1, 0, "one", "two"); // (стартовый индекс, сколько эл-тов удаляем, новый элемент, новый элемент)
value = numArr.reverse(); // переворачивает массив
value = numArr.concat(1, 2); // возвращяет массив с новыми данными в скобках
value = numArr.join(" "); // делает из массива строку, принимая разделитель
value = "hello world".split(" "); // разбивает строку на массив
console.log(value, numArr);
