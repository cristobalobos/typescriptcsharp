function addit(num1: number, num2: number, num3: number = 10): number {
  let total = num1 + num2 + num3;
  return total;
}

let answer1 = addit(14, 23, 30);
console.log(`Adding 3 numbers ${answer1}`);

answer1 = addit(14, 23);
console.log(`Adding 2 numbers ${answer1}`);
