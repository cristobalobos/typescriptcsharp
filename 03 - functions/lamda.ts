var multiplyit = function (num1: number, num2: number): number {
  return num1 * num2;
};

var multiplyitLamda = (num1: number, num2: number): number => num1 * num2;

var sayFirstNumber: (firstNumber: number) => void;

sayFirstNumber = function (first: number) {
  console.log(first);
};

console.log(multiplyit(5, 7));
console.log(multiplyitLamda(5, 7));
sayFirstNumber(35);

/*35
35
35*/
