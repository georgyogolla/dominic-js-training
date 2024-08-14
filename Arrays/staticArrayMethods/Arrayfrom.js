// STATIC METHODS
// Static methods can only be called with the prefix Array. 
// They relate directly to an Array as a whole, rather than a specific array that you have created or are working with.

// The Array.from() 
// - static method creates a new, shallow-copied Array instance from an iterable or array-like object
// SYNTAX
// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)

// To convert an ordinary object that's not iterable or array-like to an array (by enumerating its property keys, values, or both), use Object.keys(), Object.values(), or Object.entries(). 
// To convert an async iterable to an array, use Array.fromAsync().

const obj1 = {a:1, b:2, c:3};
// use Object.keys to convert the obj1 keys to an iterable array
console.log(Object.keys(obj1));//keys as an array

// use Object.values to convert the obj1 values to an iterable array
console.log(Object.values(obj1));//values as an array

// use Object.entries to convert the obj1 entries to an iterable array
console.log(Object.entries(obj1));//entries as an array

// convert a string into an array
console.log(Array.from("Hello, World!"));// ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]

// use Array.from() with Set()
const set = new Set(["hello", "hello", "kenya"]);
console.log(Array.from(set));

console.log(Array.from("kenya, yetu"));

// using Array.from() with map()
const map = new Map([[1, "a"], [3, "b"], [5, "c"]]);// Map expects array like key-value pairs
console.log(Array.from(map));

// get keys from map variable
console.log(Array.from(map.keys()));
// get values from map variable
console.log(Array.from(map.values()));
