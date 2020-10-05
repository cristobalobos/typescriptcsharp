function addit(num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    var total = num1 + num2 + num3;
    return total;
}
var answer1 = addit(14, 23, 30);
console.log("Adding 3 numbers " + answer1);
answer1 = addit(14, 23);
console.log("Adding 2 numbers " + answer1);
