// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// SYNTAX
// includes(searchElement)
// includes(searchElement, fromIndex)

const fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("mango")); // false
console.log(fruits.includes("cherry", 2)); // true
console.log(fruits.includes(123)); // false (not a string)

// The includes() method compares searchElement to elements of the array using the SameValueZero algorithm. 
// Values of zero are all considered to be equal, regardless of sign. (That is, -0 is equal to 0), but false is not considered to be the same as 0. NaN can be correctly searched for.
console.log([NaN].includes(NaN)); // true
console.log([1, 2, NaN, 3].includes(NaN)); // true
console.log([1, 2, NaN, 3].includes(3)); // true
console.log([1, 2, NaN, 3].includes(4)); // false

// The includes() method does not perform type conversion, unlike indexOf(). If the searchElement is a number and an element in the array is a string representation of that number, the includes() method will return false.
console.log([1, "1", 2].includes("1")); // true
console.log([1, "1", 2].includes(1)); // true
console.log([1, "1", 2].includes(1.0)); // false

// If fromIndex is negative, the computed index is calculated to be used as a position in the array at which to begin searching for searchElement. 
// If the computed index is less than or equal to 0, the entire array will be searched.
console.log(fruits.includes("banana", -1)); // false
console.log(fruits.includes("banana", -2)); // false
console.log(fruits.includes("banana", -fruits.length)); // true
console.log(fruits.includes("banana", -fruits.length - 1)); // false

// If fromIndex is greater than or equal to the length of the array, the method returns false.

// When used on sparse arrays, the includes() method iterates empty slots as if they have the value undefined.
console.log([1, , 3].includes(2)); // false
console.log([1, , 3].includes(undefined)); // true
console.log([1, undefined, 3].includes(null)); // false