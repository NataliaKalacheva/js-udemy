const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 }
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 }
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 }
  },
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 }
  }
];

let header = {
  num: "#",
  name: "Name",
  email: "Email",
  balance: "Balance"
};

// let isSorted = false;
// let usersArr = Object.values(users);
// let totalBalance = 0;
// const fragment = document.createDocumentFragment();

// createSortBtn();
// createTable(header, usersArr);

// document.body.appendChild(fragment);

// function createTable(header, usersArr) {
//   let table = document.createElement("table");

//   table.appendChild(renderTableHeader(header));
//   table.appendChild(renderTableBody(usersArr));
//   table.appendChild(renderTotalBalance());

//   fragment.appendChild(table);
// }

// function createSortBtn() {
//   let sortBtn = document.createElement("button");
//   sortBtn.classList.add("sort-btn");
//   sortBtn.textContent = "Sort";
//   let icon = document.createElement("img");
//   icon.src = "arrow.png";
//   sortBtn.appendChild(icon);
//   fragment.append(sortBtn);
// }

// function renderTableHeader(header) {
//   let line = document.createElement("tr");
//   let headerArr = Object.values(header);
//   headerArr.forEach(item => {
//     let newHeader = document.createElement("th");
//     newHeader.textContent = item;
//     line.appendChild(newHeader);
//   });
//   return line;
// }

// function createNewData(currentUser, value) {
//   let data = document.createElement("td");
//   data.textContent = currentUser[value];
//   data.classList.add(value);
//   return data;
// }

// function renderTableBody(usersArr) {
//   const body = document.createDocumentFragment();
//   let tbody = document.createElement("tbody");
//   body.appendChild(tbody);

//   usersArr.forEach((user, i) => {
//     let newRow = document.createElement("tr");
//     let newData = document.createElement("td");
//     let names = createNewData(user, "name");
//     let emails = createNewData(user, "email");
//     let balance = createNewData(user, "balance");

//     totalBalance += user.balance;

//     tbody.appendChild(newRow);
//     newData.textContent = i + 1;
//     newRow.appendChild(newData);
//     newRow.appendChild(names);
//     newRow.appendChild(emails);
//     newRow.appendChild(balance);
//   });

//   return body;
// }

// function renderTotalBalance() {
//   const fragment = document.createDocumentFragment();
//   let total = document.createElement("tr");
//   let totalData = document.createElement("td");
//   totalData.textContent = "Total Balance: ";
//   let boldBalance = document.createElement("b");
//   boldBalance.textContent = totalBalance;

//   totalData.colSpan = usersArr.length;
//   totalData.classList.add("right");
//   fragment.appendChild(total);
//   total.appendChild(totalData);
//   totalData.appendChild(boldBalance);

//   return fragment;
// }

// document.querySelector(".sort-btn").addEventListener("click", function() {
//   let table = document.querySelector("table");
//   let tbody = document.querySelector("tbody");
//   let header = document.querySelector("tr");
//   table.removeChild(tbody);
//   if (isSorted) {
//     let sortedUsers = usersArr.sort(
//       (prev, next) => prev.balance - next.balance
//     );
//     header.after(renderTableBody(sortedUsers));

//     this.classList.remove("active");
//     isSorted = false;
//     return;
//   }
//   this.classList.add("active");
//   let sortedUsers = usersArr.sort((prev, next) => next.balance - prev.balance);
//   header.after(renderTableBody(sortedUsers));
//   isSorted = true;
//   return;
// });

function generateThead(tableSchema) {
  const thead = document.createElement("thead");
  const tr = generateTr(tableSchema, "th");
  thead.appendChild(tr);
  return thead;
}

function generateTr(tableSchema, tagName = "td") {
  const tr = document.createElement("tr");
  Object.values(tableSchema).forEach(value => {
    const td = document.createElement(tagName);
    td.textContent = value;
    tr.appendChild(td);
  });

  return tr;
}

function generateTbody(tableSchema, items) {
  const body = document.createElement("tbody");
  items.forEach((item, index) => {
    item.num = index + 1;
    const itemSchema = generateItemsSchema(tableSchema, item);
    const tr = generateTr(itemSchema, "td");
    body.appendChild(tr);
  });
  return body;
}

function generateItemsSchema(tableSchema, item) {
  const itemSchema = Object.keys(tableSchema).reduce((acc, key) => {
    if (key in item) {
      acc[key] = item[key];
    }
    return acc;
  }, {});
  return itemSchema;
}

function generateTableTemplate() {
  const table = document.createElement("table");
  return table;
}

function generateTotalBalance(tableSchema, items) {
  const total = items.reduce((acc, item) => acc + parseFloat(item.balance), 0);
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const columnCounts = Object.keys(tableSchema).length;

  td.insertAdjacentHTML("beforeend", `Total Balance: <b>${total}</b>`);
  td.setAttribute("colspan", columnCounts);
  td.setAttribute("align", "right");

  tr.appendChild(td);

  return tr;
}

function initTable(tableSchema, items) {
  const container = document.querySelector("body");
  const table = generateTableTemplate();
  const header = generateThead(tableSchema);
  const body = generateTbody(tableSchema, items);
  const total = generateTotalBalance(tableSchema, items);

  table.appendChild(header);
  table.appendChild(body);
  table.appendChild(total);

  container.appendChild(table);
}

initTable(header, users);
