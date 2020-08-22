function http() {
  return {
    get(url, cb) {
      try {
        // try, catch для обработки синхронных ошибок
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            //обработка асинхронных ошибок
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        // try, catch для обработки синхронных ошибок
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            //обработка асинхронных ошибок
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) =>
            xhr.setRequestHeader(key, value)
          );
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    }
  };
}

const myHttp = http();

// myHttp.get(
//     "https://jsonplaceholder.typicode.com/posts",
//     (err, res) => {
//         if(err) {
//       console.log("error", err);
//       return;
//         }

//     }
//   );

function getPost(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, resp) => {
        if (err) {
          reject(err);
        }
        resolve(resp);
      }
    );
  });
}

function getPostComments(post) {
  const { id } = post;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, resp) => {
        if (err) {
          reject(err);
        }
        resolve({ post, comments: resp });
      }
    );
  });
}

function getUserCreatedPost(data) {
  const {
    post: { userId }
  } = data;
  console.log(userId);
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      (err, resp) => {
        if (err) {
          reject(err);
        }
        resolve({ ...data, user: resp });
      }
    );
  });
}

// getPost(50)
//   .then(post => getPostComments(post))
//   .then(data => getUserCreatedPost(data))
//   .then(fullData => console.log(fullData))
//   .catch(err => console.log(err))
//   .finally(() => console.log("final"));

//promise.all

function getPost2(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, resp) => {
        if (err) {
          reject(err);
        }
        resolve(resp);
      }
    );
  });
}

function getPostComments2(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, resp) => {
        if (err) {
          reject(err);
        }
        resolve(resp);
      }
    );
  });
}

function getUserCreatedPost2(userId) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      (err, resp) => {
        if (err) {
          reject(err);
        }
        resolve(resp);
      }
    );
  });
}

Promise.all([getPost2(1), getPostComments2(1), getUserCreatedPost2(1)])
  .then(fulldata => console.log(fulldata))
  .catch(err => console.log(err));
// получаем массив ответов промисов в том же порядке
