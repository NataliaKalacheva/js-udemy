const div = document.querySelector("div");
const titles = document.querySelectorAll("h1");
const h1 = document.getElementsByTagName("h1");

// console.log(titles); //коллекция NodeList, но мы не можем работать с ними, как с массивами. Неживые, снимки наших элементов.

// console.log(h1); //HTML collection - живые коллекии, которые меняются вместе с DOM

//console.log(Array.from(titles)); // приводим коллекцию к массиву
// console.log(Array.prototype.slice.call(titles));
// console.log([...titles]);

// console.log(div.nextSibling); //текст, следующий за дивом

// console.log(div.nextElementSibling); //элемент, следующий за дивом

// console.log(div.firstElementChild); //первый дочерний элемент дива

// console.log(div.firstChild); //первый текст внутри дива

// console.log(document.body.firstChild.nextSibling); //получили комментарии

// console.log(document.links); // получим все ссылки в коллекции
// console.log(document.forms); // получим все формы в коллеции

// window - окно
// navigator - браузер
// location

document.body.style.background = "red";
setTimeout(() => (document.body.style.background = ""), 1000);
