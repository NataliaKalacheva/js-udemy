// Функции конструкторы - обычные функции, которые вызвались оператором new. Это функции конструкторы или встроенные классы, при вызове которых нам задается какая-то сущность, объект.

//конструктор для примитивных типов
const str = new String("hello world");
// console.log(str);
// console.log(String); // output: function

// создать функцию конструктор, принято называть с большой буквы
function Product(brand, price, discount) {
  // 1. внутри функции Product создается пустой объект
  // 2. он привязывается к this
  // 3. мы можем добавлять в объект св-ва и методы
  // 4. функция возвращает этот объект
  this.brand = brand;
  console.log(this);
  this.price = price;
  this.discount = discount;
  this.getPriceWithDiscount = function() {
    return (this.price * (100 - this.discount)) / 100;
  };
}

// функция становиться функцией конструктором, когда она вызывается с оператором new

const apple = new Product("Apple", 100, 15); // this указывает на объект Product {}
console.log(apple); // output: Product
const samsung = new Product("Sumsung", 200, 25);
console.log(samsung);

const cucumber = Product(); // this указывает на window
// console.log(cucumber); //output: undefined

// Функции конструкторы помогают нам создавать новые объекты с набором св-в и методов

apple.getPriceWithDiscount(); //85
samsung.getPriceWithDiscount(); //150

// Такие функции конструкторы в JS еще означают классами
// Классы - собственный тип данных для объекта,представленный функцией. Разделяем приложение на некоторые сущности и описываем эти сущности в форме объектов
// Классы - имеют набор св-в и методов для работы с экземпляром этого класса. Экземпляр - это порождаемый классом элемент.

// apple instanceof Product // true
// [] instanceof Array // true
