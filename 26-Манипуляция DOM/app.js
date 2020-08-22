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
// console.log(link.parentElement);
// console.log(link.closest('.content'));

div.classList.add("article", "custom");
div.classList.remove("article");
// div.classList.contains('custom');
// div.classList.toggle("toggle")
// console.dir(link);

div.setAttribute("id", "myId");
// div.removeAttribute("id")
// div.getAttribute("id")
// div.hasAttribute("id")

// div.dataset.myattr

// *Манипуляция DOM
const title = document.querySelector("h1");

// title.innerHTML = "<span>text</span>"; //добавляем в элемент новый элемент
// title.textContent = "<span>new text</span>"; //изменяем текст в элементе
// title.appendChild("<span>appen</span>"); //ОШИБКА! Добавляет только к элементу DOM

// title.insertAdjacentHTML("beforebegin", "<h2>title h2</h2>"); //добавляем тег перед h1

//title.insertAdjacentElement //позволяет вставлять узлы в определенную позицию

// title.innerHTML += "<span>new text</span>";
// const span = title.querySelector("span");

// console.log(span); //спан изменил текст

// title.innerHTML += "<span>new text2</span>";
// span.textContent += "abababa"; //текст не изменяем!!!

//innerHTML удаляет все существующие объекты внутри элемента, и мы теряем на них ссылки!!! Спан теперь нигде не находится, связь на странице с ним не установлена

// *Создание элемента

const span = document.createElement("span"); //Создали элемент, но он находится только в JS
span.textContent = "span created";
span.classList.add("myClass");
console.log(span);
title.appendChild(span);

div.appendChild(span); // исчез из title! СОзданный Дом-узел м.б. только в одном экземпляре

//При добавлении новых элементов вся страница перерисовывается заново.  DOM-операции яв-ся синхронно.Лучше создавать все элементы программно, завернуть в див или фрагмент, после чего добавить это в разметку.

const fragment = document.createDocumentFragment(); // Дом-узел к которому мы так же можем применять методы добавления, удаления и т.д. Коробка, в которую складываем элементы.

const colors = ["black", "yellow", "orange"];
colors.forEach(color => {
  const item = document.createElement("div");
  div.classList.add(`bg-${color}`);
  item.textContent = color;
  item.style.background = color;
  fragment.appendChild(item);
});

document.body.appendChild(fragment); //сам фрагмент не отрисовывается на стр, только выкладывает все что внутри

// // *Удаление элементов

// title.remove(); //не поддерживается в IE11
title.parentElement.removeChild(title); //старый способ

//Работать с атрибутами
link.attributes; // NamedNodeMap {0: href, 1: class} псевдомассив
link.getAttribute('href'); // "address"
link.setAttribute('href', 'contacts'); // <a href="contacts" class="link">Link</a>
link.hasAttribute('class'); // true
link.removeAttribute('class'); // <a href="contacts">Link</a>

// В JavaScript есть специальное свойство dataSet для работы с нестандартными атрибутами. Для этого атрибут тега должен начинаться с приставки data-.

// {/* <a href="address" class="link" data-contacts=”123456”>Contacts</a>
// var link = document.querySelector(‘a’);

// link.dataset.contact; // “123456” */}

//Создание и добавление узлов и элементов

document.createElement(tagName); //создает элемент согласно заданному тегу

document.createTextNode('Some text'); //создает текстовый узел с заданным текстом

element.cloneNode(isDeepCopy); // создает копию узла. Если аргументом передано true, копия создастся со вложенными узлами.

parentNode.appendChild(child) // добавит внутрь parentNode элемент child. Добавленный элемент будет вставлен после всех дочерних узлов (если узел уже был на странице, он просто будет перемещен на новое место).

parentNode.insertBefore(newElement, nextElement); // добавит в parentNode элемент newElement перед nextElement.

parentNode.removeChild(child) // удалит внутри parentNode элемент child.

parentNode.replaceChild(newChild, element) //внутри parentNode заменит узел element на newChild.
elem.remove() // удаляет элемент. Метод не работает в IE11-

//Удалить все содержимое элемента можно с помощью innerHTML:
document.querySelector(‘div’).innerHTML = ‘’;

element.insertAdjacentHTML(position, htmlElement) -//вставляет html текст в указанную позицию position может принимать одно из следующих значений:
// 'beforebegin' - перед element;
// 'afterbegin' - внутри element, перед первым дочерним элементом (потомком);
// 'beforeend' - внутри element, после последнего дочернего элемента;
// 'afterend' - после element.

document.createDocumentFragment() // метод создает объект, похожий на узел DOM (но это не node!).
// У него есть методы appendChild, removeChild, children и другие, но нет таких, как innerHTML и tagName.
