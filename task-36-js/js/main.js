function checkNumbers(num1, num2) {
    return num1 === 20 || num2 === 20 || (num1 + num2) <= 20;
}

console.log(checkNumbers(12, 8));
console.log(checkNumbers(10, 17));
console.log(checkNumbers(8, 9));