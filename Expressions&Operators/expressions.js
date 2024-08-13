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



  // A unary operation is an operation with only one operand.



// RELATIONAL OPERATORS
// in - The in operator returns true if the specified property is in the specified object
const fruitJuicePrice = {orangeJuice: 100, mangoJuice: 200};
console.log("mangoJuice" in fruitJuicePrice); // true; - you have to use the key as a string in order to get results

// using in with arrays
const fruits = ["apple", "banana", "orange"];
console.log(1 in fruits); // true; - in is only used with index in arrays

// instaceof - The instanceof operator returns true if the specified object is of the specified object type
const arrs = [1,2,3];
console.log(arrs instanceof Object);//true

const newDay = new Date(23-7-2024);
console.log(newDay instanceof Date);//true

// Basic expressions
// this keyword
const nairobiEstates = {
  embakasi: "utawala",
  kikuyu: "uthiru",
  kasarani: "kamwokya",
  kenyatta: "kibwezi",
  hello: function(){
    console.log("how a you");
  }

}
console.log(nairobiEstates.hello(), this);
// console.log(nairobiEstates, this);
// console.log(nairobiEstates.embakasi, this);

// GROUPING OPERATOR ()



// new operator - applicable in javascript classes
// super - applicable in javascript classes






  