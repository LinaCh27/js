function operations(num1, num2) {
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
  
    if (addition >= 0) {
      console.log(`The result of addition is ${addition}.`);
    } else {
      console.log("The result is invalid.");
    }
  
    if (subtraction >= 0) {
      console.log(`The result of subtraction is ${subtraction}.`);
    } else {
      console.log("The result is invalid.");
    }
  
    if (multiplication >= 0) {
      console.log(`The result of multiplication is ${multiplication}.`);
    } else {
      console.log("The result is invalid.");
    }
  }

  operations(12, 17);

