function newEvery(arr, fnc) {
  if (typeof fnc == "function" && Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      var value = fnc(arr[i], i);
      if (value === false) {
        break;
      } else {
        value = true;
      }
    }
  }
  return value;
}

function checkNumbers(element, index, arr) {
  let res = false;
  if (element > 5) {
    res = true;
  }
  return res;
}

newEvery([1, 5, 3, 4, 5], checkNumbers);
//Array.isArray(arr)
