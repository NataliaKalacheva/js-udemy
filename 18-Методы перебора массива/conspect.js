const users = [
  {
    _id: "5cdce6ce338171bb473d2855",
    index: 0,
    isActive: false,
    balance: 2397.64,
    age: 39,
    name: "Lucile Finley",
    gender: "female",
    company: "ZOXY",
    email: "lucilefinley@zoxy.com",
    phone: "+1 (842) 566-3328",
    registered: "2015-07-12T09:39:03 -03:00"
  },
  {
    _id: "5cdce6ce0aa8d071fa4f4cc5",
    index: 1,
    isActive: true,
    balance: 2608.48,
    age: 33,
    name: "Woodward Grimes",
    gender: "male",
    company: "FORTEAN",
    email: "woodwardgrimes@fortean.com",
    phone: "+1 (960) 436-3138",
    registered: "2014-09-08T03:24:39 -03:00"
  },
  {
    _id: "5cdce6ce103de120d32d6fe4",
    index: 2,
    isActive: true,
    balance: 1699.99,
    age: 25,
    name: "Robinson Coleman",
    gender: "male",
    company: "GENMOM",
    email: "robinsoncoleman@genmom.com",
    phone: "+1 (852) 543-3171",
    registered: "2019-04-23T08:24:58 -03:00"
  },
  {
    _id: "5cdce6cebada7a418d8ccb3d",
    index: 3,
    isActive: true,
    balance: 2621.84,
    age: 25,
    name: "Austin Benton",
    gender: "male",
    company: "ZILIDIUM",
    email: "austinbenton@zilidium.com",
    phone: "+1 (977) 573-2627",
    registered: "2016-08-02T10:08:24 -03:00"
  },
  {
    _id: "5cdce6ced81fe99596d9cef5",
    index: 4,
    isActive: true,
    balance: 1297.31,
    age: 37,
    name: "Casandra Stout",
    gender: "female",
    company: "ANACHO",
    email: "casandrastout@anacho.com",
    phone: "+1 (929) 465-3804",
    registered: "2018-04-14T11:27:26 -03:00"
  },
  {
    _id: "5cdce6ce6c3ae6c4d6f39e88",
    index: 5,
    isActive: false,
    balance: 2165.49,
    age: 20,
    name: "Valencia Carrillo",
    gender: "male",
    company: "XEREX",
    email: "valenciacarrillo@xerex.com",
    phone: "+1 (977) 522-3378",
    registered: "2014-02-14T11:45:27 -02:00"
  }
];

//forEach - ничего не возвращает, перебирает массив, принимает коллбек после аргумента
//filter - возвращает новый массив, в который войдут только те элементы, для который переданный колбек будет тру
//map - новый массив, возвращаемый из старого после выполнения коллбека
//reduce - преобразовать массив в другую сущность или посчитать
//some/every
//sort - изменяет исходный массив
//find - найти элемент в массиве

//forEach - короткая версия for

users.forEach((user, i, arr) => {
  //console.log(user, i, arr);
});

//filter

const userLess30 = users.filter((user, i, arr) => user.age < 30);
//console.log(userLess30);

const activeUsers = users.filter(users => users.isActive);
//console.log(activeUsers);

//map
const userName = users.map(user => user.name);
// console.log(userName); // вернет массив с именами

// const userName = users.map(user => ({
//   name: user.name,
//   age: user.age
// }));
// console.log(userName); //вернет объекты с именами и возрастом

//reduce

const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0); //где 0 стартовое значение. acc = аккумулятор, где хранится результат предыдущей операции. user - элемент массива, и сам массив.
//console.log(totalBalance);

//получить объект Объектов из массива. где ключ - id, а значение все остальные данные масива

const usersObj = users.reduce((acc, user) => {
  acc[user._id] = user;
  return acc;
}, {});

//console.log(usersObj);

//some - возвращает тру, если хотя бы для одного элемента массива возвращается тру

const isMAle = users.some(user => user.gender === "male");
//console.log(isMAle);

const isAllMale = users.every(user => user.gender === "male");
//console.log(isAllMale);

const isAll18 = users.every(user => user.age > 18);
//console.log(isAll18);

//find

const user = users.find(user => user.name === "Valencia Carrillo");
//console.log(user); //получаем весь объект пользователя

//sort

const strArr = ["Denis", "Tata", "Gosha", "Prosha", "Anna"];

strArr.sort(); //отсортирует от А до Я
//console.log(strArr);

const numArr = [10, 22, 33, 5, 3, 1];
numArr.sort();
//console.log(numArr);//[1, 10, 22, 3, 33, 5], т.к. сортирует лексически

numArr.sort((prev, next) => {
  // console.log(prev, next); //передает пары
  return prev - next;
});
//console.log(numArr);

//чтобы сорт сортировал правильно, мы должны возвращать, либо цифру 0, либо > 0, либо < 0(любую). Если она больше - то элементы меняются местами(число слева, больше чем число справа)

users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(users); //отсортированы по возрасту
