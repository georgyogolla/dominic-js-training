  // Arithmetic operators
  // In addition to the standard arithmetic operations (+, -, *, /), JavaScript provides the arithmetic operators listed in the following
  // table.

  // ** (exponentiation)
  console.log(2 ** 3); // 8
  console.log(2 ** 4); // 16

  // % (modulus) operator
  console.log(7 % 3); // 1

  // ++ (increment) operator
  let x1 = 1;
  console.log(x1++); // 1
  console.log(x1); // 2

  // -- (decrement) operator
  let y1 = 5;
  console.log(y1--); // 5
  console.log(y1); // 4

  // unary operators
  
  let z = 10;
  console.log(++z); // 11
  console.log(--z); // 10

  // delete operator
  let obj = { name: "John", age: 30 };
  console.log(delete obj.name); // true
  console.log(obj);

  // unary operator
// Adds 1 to the operand  If used as a prefix operator (++x)
//  returns the value of its operand after adding one
  let unOperator = 2;
  console.log(unOperator); //
  console.log(++unOperator);
  console.log(unOperator); // true

  console.log("POSTFIX UNARY OPERATOR"); //
  // if used as a postfix operator (x++)
  // returns the value of its operand before adding one

  let valTwo = 3;
  console.log(valTwo); //
  console.log(valTwo++); //
  console.log(valTwo); //

  // (--x) and (x--) works same as (++x) and (x++).
  // Only difference is that one subtracts and the other adds

  // unary negation (-x) -> Returns the negation of its operand. e.g if (x = 1) the negation of the operand is (-1)
  // unary plus (+x) ->  Attempts to convert the operand to a number, if it is not already e.g "1" wil be 1;
