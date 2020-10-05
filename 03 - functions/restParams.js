// * very similar "params"
function addWithRest(num1, num2) {
  var numbers = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    numbers[_i - 2] = arguments[_i];
  }
  var result = num1 + num2;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
var restAnswer = addWithRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(restAnswer);
// 55
