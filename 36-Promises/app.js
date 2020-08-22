// console.log("ok");
// const promise = new Promise((resolve, reject) => {
//   //   setTimeout(() => resolve(Math.random()), 1000);
//   setTimeout(() => reject("error"), 1000);
// });
// // принимает в качестве аргументов две функции. resolve - скажет, что промис выполнился успешно, reject - не успешно.
// console.log(promise);
// promise
//   .then(x => {
//     console.log(x); //получим в качестве Х переданный резолв из промис
//     return x;
//   })
//   .then(y => console.log(y)) // получим в качестве y предыдущий резолв
//   .catch(err => console.log(err)); // подписываемся на ошибку после последнего then, при этом информация об ошибке придет на всех этапах, т.к. это единый обработчик ошибок для всех асинхронных операций.

// // promise.then(z => console.log(z)); // даже при повторном вызове promise в статусе resolved - мы получим первое присвоенное значение.

// // Функция resolve и reject могут выполняться только один раз, и если resolve выполнен - то reject уже не выполняется, и наоборот. Так же, в эти функции мы можем передать только один аргумент!

// //пример промиса в xhr запросе
// function httpGet(url) {
//   return new Promise(function(resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onload = function() {
//       if (this.status == 200) {
//         resolve(this.response);
//       } else {
//         let error = new Error(this.statusText);
//         error.code = this.status;
//         reject(error);
//       }
//     };
//     xhr.onerror = function() {
//       reject(new Error("Network Error"));
//     };
//     xhr.send();
//   });
// }

// // httpGet("/article/promise/user.json").then(
// //   response => alert(`Fulfilled: ${response}`),
// //   error => alert(`Rejected: ${error}`)
// // );

// // chaining цепочки промисов
// // при чейнинге каждый следующий then переходит результат предыдущего
// // если then вернул promise, то дальше по цепочке будет передан не сам промис, а его результат

// httpGet("url")
//   .then(response => {
//     let user = JSON.parse(response); // Получаем данные о пользователе и передаем дальше
//     return user;
//   })
//   .then(user => {
//     return httpGet(`https://api.github.com/users/${user.name}`); //получаем информацию с гитхаб
//   })
//   .then(githubUser => {
//     githubUser = JSON.parse(githubUser);

//     let img = new Image();
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.appendChild(img); // выводим аватар на 3 секудны

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         img.remove();
//         resolve();
//       }, 3000);
//     });
//   })
//   .catch(error => {
//     alert(error);
//   });

var isMomHappy = true;

//promise

var willGetNewPhone = new Promise(function(resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: "Samsung",
      color: "black"
    };
    resolve(phone);
  } else {
    var reason = new Error("mom is not happy");
    reject(reason);
  }
});

// call promise

var askMom = function() {
  console.log("before asking Mom");
  willGetNewPhone
    .then(showOff)
    .then(function(fulfilled) {
      //fulfilled - точное значение при успехе
      // yay, you got a new phone
      console.log(fulfilled);
      // output: {brand: "Samsung",color: black}
    })
    .catch(function(error) {
      // oops, mom don`t buy it
      console.log(error.message);
      // output: "mom is not happy"
    });
  console.log("after");
}; // output: before, after, result

var showOff = function(phone) {
  var message =
    "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";
  return Promise.resolve(message);
};

askMom();
