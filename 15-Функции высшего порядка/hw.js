function getValue(arr, fnc) {
  var newItem = "";
  for (var i = 0; i < arr.length; i++) {
    //перебираем массив
    newItem = newItem + fnc(arr[i]); // сохраняем обработанные функцией элементы массива в строку
  }
  var newValue = "New value: " + newItem; // собираем новое значение
  console.log(newValue);
  return newValue;
}

function handler1(item) {
  var string = item[0].toUpperCase() + item.substring(1);
  return string;
}

function handler2(item) {
  return item * 10 + ",";
}

function handler3(item) {
  var string = item.name + " is " + item.age + ", ";
  return string;
}

function handler4(item) {
  var arr = item.split(""); //преобразуем строку в массив
  var reverseArr = arr.reverse(); //переворачиваем массив встроенным методом
  var string = reverseArr.join("") + ", "; // преобразуем массив в строку
  return string;
}

// function handler3(item) {
//   console.log(item);
//   var string = "";
//   var keys = Object.keys(item); // получаем длину массива, кол-во ключей в объекте
//   console.log(keys);
//   for (var j = 0; j < keys.length; j++) {
//     var value = item[keys[j]];
//     if (j === 0) {
//       string = value + "" + string;
//     } else {
//       string = value + " is " + string;
//     }
//   }
//   console.log(string);
//   return string;
// }

getValue(["my", "name", "is", "Trinity"], handler1);

getValue([10, 20, 30], handler2);

getValue([{ age: 45, name: "Jhon" }, { age: 20, name: "Aaron" }], handler3);
//“New value: Jhon is 45, Aaron is 20,”

getValue(["abc", "123", "155", "repus"], handler4);
