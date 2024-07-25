// Unlike most global objects, Math is not a constructor.
// You cannot use it with the new operator or invoke the Math object as a function.
// All properties and methods of Math are static

//static properties
console.log(Math.PI);// constant property in Math Object 

function getCircumference(radius){
    return 2 * Math.PI * radius
}
const circum = getCircumference(5);
console.log(circum);

function getCircum2(radius2){
    return Math.PI * (radius2 + radius2); 
}
const circum2 = getCircum2(5);
console.log(circum2);

// Static method - they have parantheses after them 
// Math.abs - returns an absolute value. If we have negative arguments passed then the results will be positive

function abs(a, b){
    return Math.abs(a + b);
}
const ab = abs(2, -3);
console.log(ab);

console.log(Math.abs(-3));
// Math.abs() returns NaN when the argument passed cannot be coerced to a number
// e.g
console.log(Math.abs("hello"));// NaN 

// Math.ceil() 
// The Math.ceil() static method always rounds up and returns the smallest integer 
//greater than or equal to a given number.
console.log(Math.ceil(4.001));// 5
console.log(Math.ceil(-5.002));// -5 which is greater to the given number

// The Math.floor() static method always rounds down and returns the largest integer 
//less than or equal to a given number.
console.log(Math.floor(5));// 5 which is equal to the given number
console.log(Math.floor(5.9));//5 which is less than the given number

// The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
console.log(Math.max(1, 2, 3, 4, 5));// 5
console.log(Math.max(5, 3, 2, 1, 4));// 5
console.log(Math.max());// -Infinity
console.log(Math.max(-2, -3, -9));// -2

// The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
console.log(Math.min(1, 2, 3, 4, 5));// 1
console.log(Math.min(5, 3, 2, 1, 4));// 1
console.log(Math.min());// Infinity
console.log(Math.min(-2, -3, -9));// -9

// The Math.pow() static method returns the value of a base raised to a power.
// Math.pow(base, exponent) - syntax
console.log(Math.pow(2, 4));
console.log(Math.pow(2, -4));

console.log(Math.pow("4", "2"));

// The Math.random() static method returns a floating-point, 
// pseudo-random number that's greater than or equal to 0 and less than 1
console.log();


