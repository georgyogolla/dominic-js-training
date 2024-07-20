// an expression is a valid unit of code that resolves to a value
// e.g 1 + 1 is an expression  

// Two types of expressions are:
// 1. An expression that has a side effect e.g x = 2;
// 2. An expression that purely evaluates e.g 3 + 5;
// An infix operator is an operator that has the format "operand1 operator operand2"
// A unary operator requires a single operand, either before or after the operator:
// e.g ++x or x++, --x, x--

// OPERATORS IN JAVASCRIPT

// ASSIGNMENT OPERATORS
// examples:
// x = 2, x += 2, x -= 2, x /= 2, x %= 2, x *= 2,  x **= f(), x <<= f(), x >>= f(), 
// x >>>= f(), x &= f(), x ^= f(), x |= f(), x &&= f(), x ||= f(), x ??= f()

// left shift operator
let y = 10;
console.log(y << 1); // 20

let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);

// (<<=): This operator takes the value of x, 
//shifts its bits to the left by the number of positions specified by the right-hand operand 
//(in this case, the result of f()), and assigns the result back to x


// Nullish coalescing assignment (??=)
// The nullish coalescing assignment (??=) operator, 
// also known as the logical nullish assignment operator, 
//only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).

const plants = {fruits: "orange",};
plants.fruit ??=  "mango";
plants.color ??= "red";
// plants ?? (color = "red");
plants.fruits ??= "pineapple";

// Short-circuiting is jargon for conditional evaluation. 
// For example, in the expression a && (b + c), 
// if a is falsy, then the sub-expression (b + c) will not even get evaluated, 
// even if it is grouped and therefore has higher precedence than &&
const x = 1;
x ??= console.log("y evaluated");
// Logs nothing
console.log(plants);

function config(options) {
    options.duration ??= 100;
    options.speed ??= 25;
    return options;
  }
  
  config({ duration: 125 }); // { duration: 125, speed: 25 } // duration argument in the function call overrides the declared duration
  config({}); // { duration: 100, speed: 25 }

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

  // XOR (exclusive OR) operator
  console.log(true ^ true); // false
  console.log(true ^ false); // true
  console.log(false ^ true); // true

  // Ternary operator (?:)
  const age = 18;
  const message = age >= 18? "You are an adult" : "You are not an adult";
  console.log(message); // You are an adult

  // bitwise operators
  let num1 = 10;
  let num2 = 5;

  console.log(num1 & num2); // 0
  console.log(num1 | num2); // 15
  
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
  