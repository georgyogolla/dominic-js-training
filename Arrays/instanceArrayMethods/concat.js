// The concat() method of Array instances is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.

// SYNTAX
// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)

const num1 = [1,2,3,4,5];
const num2 = [6,7,8,9,10];
const num3 = [10,11,12,13,14];
// concat the arrays
const num4 = num1.concat(num2, num3);
console.log(num4);


// Concatenating an array with a non-array value
const fruits = ["apple", "banana", "cherry"];
const nonArray = "orange";
// console.log(nonArray.concat(fruits));

console.log(fruits.concat(nonArray, ["greetings", null, true])); // ["apple", "banana", "cherry", "orange"]


// concatenating nested arrays
const nestedArray1 = [1, 2, [3, 4]];
// modify nestedArray1
nestedArray1[2].push(11);

console.log(nestedArray1);

const nestedArray2 = [5, 6, [7, 8]];

console.log(nestedArray1.concat(nestedArray2)); // [1, 2, [3, 4], 5, 6, [7, 8]]


// concat does not treat all array-like objects as arrays by default — 
// only if Symbol.isConcatSpreadable is set to a truthy value (e.g. true).
const obj = { 0: "a", 1: "b", 2: "c", length: 3 };
console.log(Array.from(obj)); // ["a", "b", "c"]

const obj2 = { 0: "a", 1: "b", 2: "c", length: 3, [Symbol.isConcatSpreadable]: true};
console.log(Array.from(obj2)); // ["a", "b", "c", "a", "b", "c"]

const obj3 = [2].concat(obj, obj2);
console.log(obj3);


// Using concat() on sparse arrays
// If any of the source arrays is sparse, the resulting array will also be sparse:
const sparseArray1 = [1, , 3];
const sparseArray2 = [4, 5, ,];
console.log(sparseArray1.concat(sparseArray2)); // [ 1, <1 empty item>, 3, 4, 5, <1 empty item> ]

// The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.
// copyWithin(target, start)
// copyWithin(target, start, end)

const array = [1, 2, 3, 4, 5, 6, 7];

array.copyWithin(0, 2, 3);
console.log(array); // [3, 4, 5, 4, 5]

array.copyWithin(1, 0, 2);
console.log(array);// [ 3, 3, 4, 4, 5 ]

// more examples on copyWithin()
console.log("MORE EXAMPLES: ");

const array2 = ["a", "b", "c", "d", "e"];
// ["e", "d", "c", "d", "e"]// dominic
// ["a", "b", "e", "d", "e"]// george //array2.copyWithin(2, 4);
// ["e", "b", "c", "d", "e"]//array2.copyWithin(0, 4);
// ["e", "a", "c", "d", "e"]// dominic // array2.copyWithin(1, 4);
// ["a", "e", "c", "d", "e"]// george // array2.copyWithin(1, 4);

array2.copyWithin(1, 4);
console.log(array2);




