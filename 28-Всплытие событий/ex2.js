//Всплытие событий происходит, когда одно и тоже событие установлено на вложенный элемент и на его родителя. Когда событие ребенка распространяется на родителя.

const btn = document.querySelector(".btn");
const wrap = document.querySelector(".wrap");

btn.addEventListener("click", e => {
  e.stopPropagation(); // остановили всплытие - теперь событие сработает только на кнопке!
  console.log("click btn");
});

wrap.addEventListener("click", e => {
  console.log("click wrap");
});

document.body.addEventListener("click", e => {
  console.log("click body");
});

//Погружение событий - не отслеживается по умолчанию.

wrap.addEventListener(
  "click",
  e => {
    console.log("click wrap");
  },
  { capture: true } // сначало происходит погружение до элемента, потом всплытие. Если есть .stopPropagation() - всплытия не происходит
);

document.body.addEventListener(
  "click",
  e => {
    console.log("click body");
  },
  { capture: true }
);
