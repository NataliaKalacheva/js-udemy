function Product(brand, price, discount) {
  // 1. внутри функции Product создается пустой объект
  // 2. он привязывается к this
  // 3. мы можем добавлять в объект св-ва и методы
  // 4. функция возвращает этот объект
  this.brand = brand;
  console.log(this);
  this.price = price;
  this.discount = discount;
  // this.getPriceWithDiscount = function() {
  //   return (this.price * (100 - this.discount)) / 100;
  // };
}

Product.prototype.getPriceWithDiscount = function() {
  return (this.price * (100 - this.discount)) / 100; // this при этом будет указывать на значения конкретного экземпляра прототипа
};

Product.prototype.setPrice = function(newPrice) {
  this.price = newPrice;
};

const apple = new Product("Apple", 100, 15);
const samsung = new Product("Sumsung", 200, 25);

// Прототип - это св-во объектов, которое хранит св-ва и методы своих родителей и родителей родителей.

// Прототип - это объект, содержащий св-ва и методы. (_proto_)

// Чтобы те экземпляры, которые порождаются от классов имели общий доступ к их методам и св-вам.

// Прототип отслеживается JS и при вызове метода у объекта он ищется сначала в самом объекте, а затем в цепочке прототипа.

const protoForObj = {
  sayHello() {
    return "Hello world";
  }
};

const obj = Object.create(protoForObj, {
  firstName: {
    value: "Tata"
  }
}); //output: {} with _proto_: sayHello()

// Наследование - взять от родительского класса св-ва и методы и расширить их, переиспользовать, чтобы не дублировать код.
// Функциональное наследование и прототипное наследование

function User(firstName, lastName) {
  // класс юзер с 2мя методами(getFullName and sayHello)
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function() {
    // этот метод наследуется
    return `${this.firstName} ${this.lastName}`;
  };
}

// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

User.prototype.sayHello = function() {
  // этот метод НЕ наследуется
  return `Hello ${this.firstName} ${this.lastName}`;
};

// хотим сделать еще один класс, унаследоваться от него, с теми же св-вами и плюс дополнительные

const user = new User("Tata", "Kalacheva");
// Customer

function Customer(firstName, lastName, membership) {
  User.call(this, firstName, lastName); // 1) Функциональное наследование

  this.membership = membership;
}

//2) Прототипное наследование
Customer.prototype = Object.create(User.prototype); // теперь прототипы наследуются, возвращается новый объект с привязанным прототипом
Customer.prototype.constructor = Customer; // возвращаем в прототип функцию конструктор

// теперь можем записывать новые свойства прототипа

Customer.prototype.getMemberShip = function() {
  return this.membership.toUpperCase();
};

const customer = new Customer("Goga", "Isaev", "basic");

// Наследование в ES 6

class Book {
  constructor(name = "book") {
    this.name = name;
  }
  getName() {
    return this.name; // здесь This указывает на конркетный экземпляр класса
  }
}

class Journal extends Book {
  // Наследование с помощью ключ слова extends
  constructor(name, publisher) {
    super(name); // Book.call(this.name) super = ссылка на функцию родителя
    this.publisher = publisher;
  }
  // getName() {
  //   return "The name is " + super.getName(); // дополняем функцию
  // }
}
const magazine = new Journal("Cosmopolitan", "pub");

class UserES {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class CustomerES extends UserES {
  constructor(firstName, lastName, membership) {
    super(firstName, lastName);
    this.membership = membership;
  }
  getFullName() {
    const parentRes = super.getFullName();
    return `${parentRes}, membership: ${this.membership}`; //дополнили функцию с родительским результатом
  }
}

const customerEs = new CustomerES("Tata", "Kalacheva", "basic");
console.log(customerEs);
