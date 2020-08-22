// function getPost3(id) {
//   return Promise.resolve().then(() => {
//     const [userType, userId] = id.split("-"); // получаю строку, разбиваю ее на массив с помощью сплит, и деструкторизирую массив на переменные
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
//       response => response.json()
//     );
//   });
// }

// функция с ключевым словом async всегда возвразает промис!
// async function getPost(id) {
//   return "sasad";
// }
// getPost(id);
//output: Promise {<resolved>: "sasad"}

// getPost().then(data => console.log(data));
//output: sasad

// внутри такой функции мы можем использовать ключевое слово await, которое позволяет заморозить ее до выполняние какого либо асинхронного действия.Можем применять к чему угодно.

// async function getPost(id) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   ).then(res => res.json());
//   return response;
//   //   const data = await response.json();
//   //   return data;
// }

// getPost(1)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// при использовании async/await catch обрабатывает и синхронные и асинхронные ошибки

// async/await позволяет так же обрабатывать код try catch

async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then(res => res.json());
    return response;
  } catch (err) {
    // при дополнительных действиях при ошибке удобнее использовать
    console.log(err);
    return Promise.reject(); // или throw err;
  }
}

// getPost(1)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// если нужно сделать несколько запросов

// async function getPost(id) {
//   try {
//     const response1 = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     ).then(res => res.json());
//     const response2 = await fetch(
//       `https://jsonplaceholder.typicode.com/users`
//     ).then(res => res.json());
//     return [response1, response2];
//   } catch (err) {
//     // при дополнительных действиях при ошибке удобнее использовать
//     console.log(err);
//     return Promise.reject(); // или throw err;
//   }
// }

// getPost(1).then(data => console.log(data));

// или используя Promise.all

async function getAll() {
  const [res1, res2] = await Promise.all([getPost(1), getPost(2)]);
  console.log(res1, res2);
}

getAll();
