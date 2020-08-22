// AJAX - позволяет общаться с сервером без перезагрузки страницы.
// Запрос к серверу => Подписываемся на ответ => Получаем данные => Делаем изменения на странице

// XMLHttpRequest - функция констурктор, позволяет создать экземляр запроса и вызывать спец. методы для его совершнения. Возвращает нам объект.

const btn = document.querySelector("button");
const container = document.querySelector(".container");

function getPosts(cb) {
  const xhr = new XMLHttpRequest(); //!1
  // console.log(xhr); //объект со свойствами и методами, которые мы будем использовать

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); // !2 метод запроса(get, post, delete...) и url

  //=> подписаться на события получение

  xhr.addEventListener("load", () => {
    !3;
    // console.log(xhr.responseText); //там хранится массив объектов JSON
    const response = JSON.parse(xhr.responseText);
    cb(response); //!4 передаем ответ от сервера
  }); //load - успешно произошло соединение с сервером

  xhr.addEventListener("error", () => {
    console.log("error"); // обрабатываем ошибку(что то не так с адресом)
  });
  xhr.send(); // !5если мы передаем данные - указываем в скобках
}

function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("card", "mt-3", "mb-3");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = post.title;
    const article = document.createElement("p");
    article.classList.add("card-text");
    article.textContent = post.body;
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

btn.addEventListener("click", e => {
  getPosts(renderPosts);
});
