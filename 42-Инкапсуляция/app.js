// function MyClass () {
//   var privateProperty = 'value';
//   var privateMethod = function () {
//     console.log ('Hi, I am privateMethod');
//   };

//   this.publicMethod = function () {
//     privateMethod ();
//     return privateProperty;
//   };
// }

function CoffeeMachine(power) {
  this.waterAmount = 0;

  const WATER_HEAT_CAPACITY = 4200;
  var timerId;
  var self = this;

  function getBoilTime() {
    // Приватный метод, доступ к ним, через замыкание, имеют только другие функции, объявленные в этом же конструкторе
    return (self.waterAmount * WATER_HEAT_CAPACITY * 80) / power;
  }

  function onReady() {
    // Приватный метод
    alert("Your coffee is ready!");
  }

  this.run = function() {
    // Публичный метод
    timerId = setTimeout(onReady, getBoilTime());
  };

  this.stop = function() {
    clearTimeout(timerId);
  };
}

var coffeeMachine = new CoffeeMachine(100000);

coffeeMachine.waterAmount = 200;

coffeeMachine.run();
// coffeeMachine.stop();

// power - локальная приватная переменная, к ней нельзя обратиться снаружи, но она доступна внутри конструктора

// свойства, записанные в this - публичные. waterAmount записано в объект и значит доступно для модификации снаружи.
