// Boolean values are typically produced by relational operators, equality operators, and logical NOT (!). 
//They can also be produced by functions that represent conditions, such as Array.isArray().
// Note that binary logical operators such as && and || return the values of the operands, which may or may not be boolean values.

console.log(!true);// negates true and returns false

console.log(!false);// negates false and returns true

console.log(!!true);// negates first then returns false and then negates false and finally returns true

console.log(!"");//false

console.log(!!"");// true

console.log(0 == 0); // true

console.log([] == false);// array is coerced to an empty string then both empty string and 
//false are converted to Number 0 and then 0 is copared to 0 to return true


console.log('undefined' == false);// undefined is a falsy value but when loosely compared to false they are not equal

console.log(null == false);// return false


//window.console.log('hello');// global javascript object in the browser. Not available in node

// null and undeined
// typeof is the type checker that does't throw an error if a variable is undefined
let x;
undefined
x === undefined;
true
x == undefined;
true
typeof x;
'undefined'
typeof noWhere;
'object'
typeof y;
'undefined'
y === 'undefined';

if(k in window){
 console.log("hello");
};

let w = "hello";
undefined
if(w in window){
console.log("hallo");
};


typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
Number.isNaN(1 + null); // false
//when adding null to a number, null is converted to a number and the result will be a number 
Number.isNaN(1 + undefined); // true

