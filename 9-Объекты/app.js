const user = {
  firstName: 'Denis',
  age: 30,
  isAdmin: true,
  email: 'test@test.com',
  'user-address': {
    city: 'Kharkiv'
  },
  skills: ['html', 'css', 'js']
}; //ключт м.б. объявлены через '' если свойства яв-ся сложными.Пример. 'user-adress' (через дефис без кавычек нельзя);

let value;
let prop = 'skills';

value = user.firstName; //получаю значение свойства firstName
value = user['isAdmin'];  
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address']['city'];
value = user[prop][0]; //'html'

user.firstName = 'Den'; //перезаписали значение в объекте у свойства firstName

value = user.firstName;

user.info = 'Some info'; //создан новый ключ info со значением 'Some info'

value = user.info;

user['user-address'].city = 'Kiev'; //перезапись вложенного объекта
user['user-address'].country = 'Ukraine';

console.log(user.plan); //undefined
user.plan = {}; //создаем новый объект в объекте user
user.plan.basic = 'basic'; //записываем туда новый ключ-свойство

console.log(value);
console.log(user);
