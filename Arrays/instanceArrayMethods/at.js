// The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. 
//Negative integers count back from the last item in the array.

// SYNTAX
// at(index)

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits.at(2)); // "cherry"
console.log(fruits.at(-2)); // "date"

// Our array with items
const colors = ["red", "green", "blue"];

// Using length property
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // 'green'

// Using slice() method. Note an array is returned
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 'green'

// Using at() method
const atWay = colors.at(-2);
console.log(atWay); // 'green'

// Calling at() on non-array objects
// The at() method reads the length property of this and calculates the index to access.

const arrayLike = {
    length: 2,
    0: "a",
    1: "b",
    2: "c", // ignored by at() since length is 2
  };
  console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
  console.log(Array.prototype.at.call(arrayLike, 2)); // undefined
  