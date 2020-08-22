// AJAX запросы при помощи Fetch. По умолчанию, fetch делает GET-запрос и возвращает нам Promise, в котором мы получим объект ответа

// arg1 - url, arg2 - объект с настройками, если запрос не get {body: ljjk, method: ;sld...}
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
//     return response.json();
//   })
//   .then(posts => console.log(posts))
//   .catch(err => console.log(err));

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(post => resolve(post))
      .catch(err => reject(err));
  });
}

// getPost(1).then(post => console.log(post));

function getPost2(id) {
  const [userType, userId] = id.split("-"); // получаю строку, разбиваю ее на массив с помощью сплит, и деструкторизирую массив на переменные
  return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
    response => response.json()
  );
}

// getPost2(1) // Приложение упадет, т.к. число не разбить на массив
//   .then(post => console.log(post))
//   .catch(err => console.log(err));

function getPost3(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split("-"); // получаю строку, разбиваю ее на массив с помощью сплит, и деструкторизирую массив на переменные
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
      response => response.json()
    );
  });
}

getPost3(1) // в catch выпадет ошибка и приложение не упадет
  .then(post => console.log(post))
  .catch(err => console.log(err));
