const methodName = "setNewPrice";

class Product {
  constructor(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
  } // если при вызове класс не принимает аргументы, вызывать конструктор не обязательно
  get _brand() {
    return this.brand;
  }
  set _brand(name) {
    return (this.brand = name);
  }
  getPriceWithDiscount() {
    return (this.price * (100 - this.discount)) / 100;
  }
  [methodName](newPrice) {
    //такой синтаксис позволяет генерировать название для метода/вычисляемые св-ва
    // методы автоматически попадают в прототип
    return (this.price = newPrice);
  }
  static plus(x, y) {
    // Статич.мет. нет в прототипе, но есть в конструкторе
    return x + y;
  }
}

const newProduct = new Product("Sumsung", 200, 10); // мы не можем вызвать его без оператора new, будет ошибка

// Статические методы - которые могут вызываться отдельно от инстанциации класса, без создания экземпляра и доступа к this
// Если метод не требует обращения к this - статический метод
