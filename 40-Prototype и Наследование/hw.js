// //1 Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.

function Planet(name) {
  this.name = name;
  this.getName = function() {
    return "Planet name is " + this.name;
  };
}

const venus = new Planet("Venus");

function PlanetWithSatellite(name, nameOfSatellite) {
  Planet.call(this, name);
  this.nameOfSatellite = nameOfSatellite;
  this.getName = this.getName() + ". This Satellite is " + this.nameOfSatellite;
}

const earth = new PlanetWithSatellite("Earth", "Moon");

// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование

// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

function Building(name, floors) {
  this.name = name;
  this.floors = floors;
  this.getFloors = function() {
    return this.floors;
  };
}

function DwellingHouse(name, floors, flatsOnFloor) {
  Building.call(this, name, floors);
  this.flatsOnFloor = flatsOnFloor;
  this.getFloors = function() {
    return {
      floors: this.floors,
      flats: this.floors * this.flatsOnFloor
    };
  };
}

function ShoppingCenter(name, floors, shopsOnFloor) {
  Building.call(this, name, floors);
  this.shopsOnFloor = shopsOnFloor;
  this.getFloors = function() {
    return {
      floors: this.floors,
      shops: this.floors * this.shopsOnFloor
    };
  };
}

const home = new DwellingHouse("House", 10, 5);
const shop = new ShoppingCenter("Mall", 2, 10);

//ES6
// class Building {
//   constructor(name, floors) {
//     this.name = name;
//     this.floors = floors;
//   }
//   getFloors() {
//     return this.floors;
//   }
//   setFloors(quantity) {
//     return (this.floors = quantity);
//   }
// }

// class DwellingHouse extends Building {
//   constructor(name, floors, flatsOnFloor) {
//     super(name, floors);
//     this.flatsOnFloor = flatsOnFloor;
//   }
//   getFloors() {
//     return {
//       floors: this.floors,
//       allFlats: super.getFloors() * this.flatsOnFloor
//     };
//   }
// }

// const home = new DwellingHouse("My home", 20, 10);

// class ShoppingCenter extends Building {
//   constructor(name, floors, shopsOnFloor) {
//     super(name, floors);
//     this.shopsOnFloor = shopsOnFloor;
//   }
//   getFloors() {
//     return {
//       floors: this.floors,
//       allShops: this.floors * this.shopsOnFloor
//     };
//   }
// }

// const mall = new ShoppingCenter("Shopping Mall", 3, 10);

//3 Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

// function Furniture(name, price) {
//   this.name = name;
//   this.price = price;
// }
// Furniture.prototype.getInformation = function() {
//   return `${this.name} ${this.price}`;
// };

// function OfficeFurniture(name, price, isTable) {
//   Furniture.call(this, name, price);
//   this.isTable = isTable;
// }

// OfficeFurniture.prototype = Object.create(Furniture.prototype);
// OfficeFurniture.prototype.constructor = OfficeFurniture;
// OfficeFurniture.prototype.getInformation = function() {
//   return `${this.name} ${this.price} ${this.isTable}`;
// };

// function HomeFurniture(name, price, isSofa) {
//   Furniture.call(this, name, price);
//   this.isSofa = isSofa;
// }

// HomeFurniture.prototype = Object.create(Furniture.prototype);
// HomeFurniture.prototype.constructor = HomeFurniture;
// HomeFurniture.prototype.getInformation = function() {
//   return `${this.name} ${this.price} ${this.isSofa}`;
// };

// const furnitureForWork = new OfficeFurniture("cupboard", 200, false);

// const furnitureForHome = new HomeFurniture("bed", 500, true);

//ES6

class Furniture {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getInformation() {
    return `${this.name} ${this.price}`;
  }
}

class HomeFurniture extends Furniture {
  constructor(name, price, isSofa) {
    super(name, price);
    this.isSofa = isSofa;
  }
  getInformation() {
    return super.getInformation() + " " + this.isSofa;
  }
}

const furnitureForHome = new HomeFurniture("Table", 200, true);

//4 Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”. ++

// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть ++

//   true/false, должно быть скрытым). Свойства определяются в момент вызова
//   конструктора.++

//   У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации). ++

//   У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

// function User(name, date) {
//   this.name = name;
//   this.date = date;
// }

// User.prototype.getInformation = function() {
//   return `${this.name} зарегистирован на сайте с ${this.date}`;
// };

// const user1 = new User("Goshan", "04.05.19");

// function Admin(name, date, isSuper) {
//   User.call(this, name, date);
//   this.getInformation = function() {
//     if (isSuper) {
//       isSuper = `супер админ`;
//     } else {
//       isSuper = `обычный`;
//     }
//     return `${this.name} зарегистирован на сайте с ${this.date}, + ${isSuper}`;
//   };
// }

// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.constructor = Admin;

// function Guest(name, date, validDate) {
//   User.call(this, name, date);
//   this.validDate = validDate;
//   this.getInformation = function() {
//     return `${this.name} зарегистирован на сайте с ${this.date}, + ${this.validDate}`;
//   };
// }

// Guest.prototype = Object.create(User.prototype);
// Guest.prototype.constructor = Guest;

// const admin1 = new Admin("Tata", "05.06.07", true);
// console.log(admin1);
// const guest1 = new Guest("Anonim", "05.05.05", "2010");
// console.log(guest1);

// Es6
class User {
  constructor(name, date) {
    (this.name = name), (this.date = date);
  }
  getInformation() {
    return `${this.name} зарегистирован на сайте с ${this.date}`;
  }
}

class Admin extends User {
  constructor(name, date, isSuper) {
    super(name, date);
  }
  getInformation(isSuper) {
    if (isSuper) {
      isSuper = `супер админ`;
    } else {
      isSuper = `обычный`;
    }
    return super.getInformation() + ".  Пакет: " + isSuper;
  }
}

class Guest extends User {
  constructor(name, date, validDate) {
    super(name, date);
    this.validDate = validDate;
  }
  getInformation() {
    return super.getInformation() + ", время валидности " + this.validDate;
  }
}

const uder1 = new User("Tata", "01.01.01");
const admin1 = new Admin("Tata", "05.06.07", true);
console.log(admin1);
const guest1 = new Guest("Anonim", "05.05.05", "2010");
console.log(guest1);
