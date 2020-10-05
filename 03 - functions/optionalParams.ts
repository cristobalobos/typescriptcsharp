// ? optional paramater
function add(num1: number, num2: number, num3?: number): number {
  let total = num1 + num2;

  if (num3 != undefined) {
    total += num3;
  }
  return total;
}

let answer = add(14, 23, 30);
console.log("adding three numbers: " + answer);
answer = add(14, 23);
console.log(`adding 2 numbers: ${answer}`);
/*
adding three numbers: 67
adding 2 numbers: 37
*/
