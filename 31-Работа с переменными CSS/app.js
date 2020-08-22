//CSS можно управлять с помощью JS для создания динамических тем

console.log(
  window.getComputedStyle(document.documentElement).getPropertyValue("--box-bg")
); //возвращает стили элемента, переданного в круглые скобки

console.log(document.body.style.getPropertyValue("--box-bg")); //ничего нет, так как мы не задавали значение

document.body.style.setProperty("--box-bg", "rgba(5, 44, 32, 0.5)"); // указав значение данной переменной, мы поменяли глобальное значение и все элементы, привязанные к ней - поменяли стиль

document.querySelector(".box").style.setProperty("--box-bg", "green"); // поменяли значение переменной у конкретного элемента
