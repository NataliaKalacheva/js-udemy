// //Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

// function getSquare(width, height) {
//   return this.width * this.height;
// }

// const rectangle = { width: 100, height: 200, getSquare };

// console.log(rectangle.getSquare());

//Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:

// const product = {
//   price: 10,
//   discount: "15%",
//   getPrice() {
//     console.log(this.price);
//   },
//   getPriceWithDiscount() {
//     let percent = parseInt(this.discount);

//     console.log(this.price - (this.price * percent) / 100);
//   }
// };

// product.getPriceWithDiscount();

//Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту

// let figure = {
//   height: 10,
//   weigth: 10,
//   increaseHeight() {
//     return (this.height = this.height++);
//   }
// };

// figure.increaseHeight();
// console.log(figure.height);

//Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:

// const numerator = {
//   value: 1,
//   double: function() {
//     this.value += this.value;
//     return this;
//   },
//   plusOne: function() {
//     this.value++;
//     return this;
//   },
//   minOne: function() {
//     this.value--;
//     return this;
//   }
// };

// numerator
//   .double()
//   .plusOne()
//   .plusOne()
//   .minOne();

// console.log(numerator.value);

//Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

// const product2 = {
//   price: 100,
//   quantity: 10,
//   getGeneralPrice() {
//     return this.price * this.quantity;
//   }
// };

// // console.log(product2.getGeneralPrice());

// const product3 = {
//   price: 50,
//   quantity: 7
// };

// let genPrice3 = product2.getGeneralPrice.bind(product3);
// //  console.log(genPrice3());

// let sizes = {
//     width: 5,
//     height: 10
//   },
//   getSquare = function() {
//     return this.width * this.height;
//   };

//console.log(getSquare.call(sizes));

let element = {
  height: 25,
  getHeight: function() {
    return this.height;
  }
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());
