// The Array.isArray() static method determines whether the passed value is an Array.
// examples:
console.log(Array.isArray([])); // true
console.log(Array.isArray(new Array())); // true
console.log(Array.isArray(null)); // false
console.log(Array.isArray("hello")); // false

// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);//true

const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// Correctly checking for Array
Array.isArray(arr); // true
// The prototype of arr is xArray.prototype, which is a
// different object from Array.prototype
arr instanceof Array; // false