var highFive = (function() {
  var x = 0;
  return function() {
    return (x += 5);
  };
})();
highFive();
console.log(highFive());
