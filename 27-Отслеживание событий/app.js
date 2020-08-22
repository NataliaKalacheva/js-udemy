const btn = document.querySelector("button");
console.dir(btn);
const link = document.querySelector("a");

// btn.onclick = function() { //нет возможности повесить много обработчиков, обычно не используется
//   console.log("click");
// };

// btn.addEventListener("click", function(e) {
//   //есть возможность повесить много обработчиков
//   // тип события, обработчик, объект// Обработчик принимает в качестве аргументе евент-событие
//   console.log(e);
// });

// btn.addEventListener("click", function(e) {
//   // тип события, обработчик, объект
//   console.log("click 2");
// });

// btn.addEventListener("click", e => {
//   console.log(this); // при стрелочной функции this указывает на window и передается Mouse Event
//   console.log(e);
// });

// function clickhandler(e) {
//   e.preventDefault(); //отменяет действие по-умолчанию
//   console.log(this); //при обычной функции this указывает на элемент, на который навешено событие
//   console.log("click");
// }

// link.addEventListener("click", clickhandler);

// // link.removeEventListener("click", clickhandler); //удаляет события с элемента. название события, имя обработчика. Анонимную функцию удалить не можем.

const container = document.querySelector(".container");
btn.addEventListener("click", e => {
  const div = document.createElement("div");
  const nestedBtn = document.createElement("button");
  nestedBtn.textContent = "button";
  div.textContent = Math.random();
  container.appendChild(div);
  div.appendChild(nestedBtn);
});

container.addEventListener("click", e => {
  console.dir(e.target); //выводит все элементы, на которые мы кликнули внутри контейнера
  if (e.target.tagName === "BUTTON") {
    // отбираем только важные для нас элементы
    console.log("button clicked"); //навешиваем событие
  }
});

// container.addEventListener('click', e => {
//   console.dir(e.target);
//   if (e.target.tagName === 'BUTTON') {
//     console.log('button clicked');
//   }
// });
