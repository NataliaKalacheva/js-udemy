// task 1. Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен.

function promiseCreator(time, value) {
  let promise = new Promise(resolve => {
    setTimeout(function() {
      resolve(value);
    }, time);
  });
  return promise;
}

const prom = promiseCreator(1000, "OK");
prom.then(console.log);

// task 2. Создать класс, который производит экземпляр со следующими свойствами:
// - promise - промис, который создается во время запуска конструктора;
// - reject - метод, при выполнении которого promise реджектится;
// - resolve - метод, при выполнении которого promise резолвится.

class Prom {
  constructor() {
    let callback = (resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    };
    this.promise = new Promise(callback);
  }
}

const inst = new Prom();
inst.promise.then(data => console.log(data));
setTimeout(() => inst.resolve("test"), 5000);
// →  test

var promiseCount = 0;
function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById("log");
  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount + ") Запуск (запуск синхронного кода)"
  );

  // Создаём промис, возвращающее 'result' (по истечении 3-х секунд)
  var p1 = new Promise(
    // Функция разрешения позволяет завершить успешно или
    // отклонить промис
    function(resolve, reject) {
      log.insertAdjacentHTML(
        "beforeend",
        thisPromiseCount + ") Запуск промиса (запуск асинхронного кода)"
      );
      // Это всего лишь пример асинхронности
      window.setTimeout(function() {
        // Обещание исполнено!
        resolve(thisPromiseCount);
      }, Math.random() * 2000 + 1000);
    }
  );

  // Указываем, что сделать с исполненным промисм
  p1.then(
    // Записываем в протокол
    function(val) {
      log.insertAdjacentHTML(
        "beforeend",
        val + ") Обещание исполнено (асинхронный код завершён)"
      );
    }
  );

  log.insertAdjacentHTML(
    "beforeend",
    val + ") Обещание исполнено (синхронный код завершён)"
  );
}

if ("Promise" in window) {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", testPromise);
} else {
  log = document.getElementById("log");
  log.innerHTML =
    "Демонстрация невозможна, поскольку ваш браузер не поддерживает интерфейс <code>Promise<code>.";
}

let globe = true;
function doSomething() {
  return new Promise((resolve, reject) => {
    if (globe) resolve("Main func");
    else reject("Error");
  });
}
function doSomethingElse(result) {
  return new Promise((resolve, reject) => {
    if (globe) resolve(result + " + Second func");
    else reject("Error");
  });
}

function finalHandler(result) {
  console.log(result);
}

doSomething()
  .then(doSomethingElse)
  .then(finalHandler);
