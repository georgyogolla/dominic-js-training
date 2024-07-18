// an expression is a valid unit of code that resolves to a value
// e.g 1 + 1 is an expression  

// Two types of expressions are:
// 1. An expresson that has a side effect e.g x = 2;
// 2. An expresson that purely evaluates e.g 3 + 5;
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