  // logical operators
  // AND (&&) operator
  console.log(true && true); // true
  console.log(true && false); // false
  console.log(false && true); // false

  // OR (||) operator -  only one side of operator has to true
  console.log(true || true); // true
  console.log(true || false); // true
  console.log(false || true); // true

  // NOT (!) operator
  console.log(!true); // false
  console.log(!false); // true


  // AND (&&) operator with truthy and falsy values
    // LOGICAL OPERATORS
  // LOGICAL AND(&&)
  // && - returns true if both operands are true otherwise returns false if only one side is true
  // e.g true && true -> true;
  // e.g true && false -> false;

  // returns the first operand if it can be converted to false otherwise it returns the second operand.
  // e.g
  console.log(1 && 2);// 2
  console.log(null && 4);// null

  // LOGICAL OR(||)
  // Returns expr1 if it can be converted to true; 
  // otherwise, returns expr2. Thus, when used with Boolean values, || returns true if either operand is true;
  // if both are false, returns false

  console.log(1 || 2); //1
  console.log(null || 3);// 3
  console.log(true || false);// true