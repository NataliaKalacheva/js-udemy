
function sum() {
  const params = Array.prototype.slice.call(arguments);


  if (!params.length) return 0;


  return params.reduce(function (prev, next) { return prev + next; });
  }



  sum(1, 2, 3, 4); // 10
  sum(); // 0

  // Решение
  let sum = (...args) => {
     if (!args.length) return 0;

     return args.reduce((prev, next) => prev + next);
  }


  function convertToObject(num) {

    const obj = {

        value: num,

        isOdd: Boolean(num % 2)

    }

    return obj;

  }

  let convertToObject = num => ({
      value: num,
      isOdd: Boolean(num%2),
    });
