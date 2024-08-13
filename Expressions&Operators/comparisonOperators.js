  // comparison operators

  const value1 = 3;
  const value2 = 4;

  console.log('3' == value1);// true - double == converts the operands to the same type and compares them
  console.log('3' != value1);// false - != converts the operands to the same type and compares them both 

  // strict equality comparison
  console.log('3' === value1);// false - === compares the values and types of the operands
  console.log('3'!== value1);// true -!== compares the values and types of the operands

  // strict inequality comparison
  console.log('3' !== value1);// true - !== compares the values and types of the operands

  console.log(3 > 2); // true
  console.log(3 < 2); // false

  console.log(3 >= 2); // true
  console.log(3 <= 2); // false

  console.log(3 === '3'); // false - === compares the values and types of the operands

  console.log(3 == '3'); // true - double == converts the operands to the same type and compares them
