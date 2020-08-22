const div = document.querySelector("div");
const titles = document.querySelectorAll("h1");
// const h1 = document.getElementsByTagName('h1');
// console.dir(h1);
// console.log(titles);
// console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));
// console.log([...titles]);

// console.log(div.parentElement);

const link = div.querySelector(".link");
// console.log(link.parentElement); //возвращает прямого родителя
// console.log(link.closest(".content")); // возвращает ближайшего родителя с указанным селектором

// console.log(div.classList); //получаем все классы дива

// console.log(div.className);

div.classList.add("article", "custom");
div.classList.remove("article"); //удаляем класс
// div.classList.contains("custom"); // проверка на наличие класса true/false
// div.classList.toggle("toggle"); // переключаем класс

div.setAttribute("id", "myId"); //принимает название атрибута и его значение
console.dir(div.id);
// div.removeAttribute("id") //удалить
// div.getAttribute("id") //получить значение атрибута
// div.hasAttribute("id")  // проверить наличие атрибута

// div.dataset.myattr // работа с нашим кастомным атрибутом
