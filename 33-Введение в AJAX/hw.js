// const btn = document.querySelector(".get-users");
// const container = document.querySelector(".container");
// const form = document.getElementById("user-form");
// const formBtn = document.getElementById("btn-form");
// const fragment = document.createDocumentFragment();
// const listUsers = document.createElement("ul");

// btn.addEventListener("click", e => {
//   getUsers(renderUsers);
// });

// formBtn.addEventListener("click", function() {
//   const userData = getFormData(form);
//   sendUserForm(userData, renderUser);
// });

// function getUsers(cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

//   xhr.addEventListener("load", () => {
//     const response = JSON.parse(xhr.responseText);
//     cb(response);
//   });

//   xhr.addEventListener("error", () => {
//     console.log("error");
//   });

//   xhr.send();
// }

// function sendUserForm(body, cb) {
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);

//   xhr.addEventListener("load", () => {
//     const response = JSON.parse(xhr.responseText);
//     const newUser = cb(response);
//     listUsers.insertAdjacentElement("afterbegin", newUser);
//   });
//   xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//   xhr.addEventListener("error", () => {
//     console.log("error");
//   });

//   xhr.send(JSON.stringify(body));
// }

// function renderUsers(response) {
//   listUsers.classList.add("list-group");
//   response.forEach(user => {
//     let userItem = renderUser(user);
//     listUsers.appendChild(userItem);
//     fragment.appendChild(listUsers);
//   });
//   container.appendChild(fragment);
// }

// function renderUser(user) {
//   const userItem = document.createElement("li");
//   userItem.classList.add("list-group-item", "mt-4");
//   userItem.textContent = user.name;
//   const userInfo = renderUserData(user);
//   userInfo.classList.add("d-none");

//   userItem.addEventListener("click", function() {
//     userInfo.classList.toggle("d-none");
//   });

//   userItem.appendChild(userInfo);
//   return userItem;
// }

// function renderUserData(user) {
//   const userInfo = document.createElement("ul");
//   userInfo.classList.add("list-group", "list-group-flush", "mt-2");
//   for (key in user) {
//     const infoItem = document.createElement("li");
//     infoItem.classList.add("list-group-item");
//     infoItem.textContent = key + ": " + user[key];
//     userInfo.appendChild(infoItem);
//   }
//   return userInfo;
// }

// function getFormData(form) {
//   const forms = form.querySelectorAll("input");
//   const userData = {};
//   forms.forEach(input => {
//     userData[input.name] = input.value;
//   });
//   return userData;
// }

/*FORM DATA*/

const btn = document.querySelector(".get-users");
const container = document.querySelector(".container");
const form = document.getElementById("user-form");
const formBtn = document.getElementById("btn-form");
const fragment = document.createDocumentFragment();
const listUsers = document.createElement("ul");

btn.addEventListener("click", e => {
  getUsers(renderUsers);
});

formBtn.addEventListener("click", function() {
  const userData = getFormData(form);
  console.log(userData);
  sendUserForm(userData, renderUser);
});

function getUsers(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

function sendUserForm(body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    const newUser = cb(response);
    listUsers.insertAdjacentElement("afterbegin", newUser);
  });
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send(body);
}

function renderUsers(response) {
  listUsers.classList.add("list-group");
  response.forEach(user => {
    let userItem = renderUser(user);
    listUsers.appendChild(userItem);
    fragment.appendChild(listUsers);
  });
  container.appendChild(fragment);
}

function renderUser(user) {
  const userItem = document.createElement("li");
  userItem.classList.add("list-group-item", "mt-4");
  userItem.textContent = user.name;
  const userInfo = renderUserData(user);
  userInfo.classList.add("d-none");

  userItem.addEventListener("click", function() {
    userInfo.classList.toggle("d-none");
  });

  userItem.appendChild(userInfo);
  return userItem;
}

function renderUserData(user) {
  const userInfo = document.createElement("ul");
  userInfo.classList.add("list-group", "list-group-flush", "mt-2");
  for (key in user) {
    const infoItem = document.createElement("li");
    infoItem.classList.add("list-group-item");
    infoItem.textContent = key + ": " + user[key];
    userInfo.appendChild(infoItem);
  }
  return userInfo;
}

function getFormData(form) {
  var userData = new FormData(form);
  var object = {};
  userData.forEach((value, key) => {
    object[key] = value;
  });
  var newData = JSON.stringify(object);
  return newData;
}
