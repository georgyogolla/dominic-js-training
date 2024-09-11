// The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.

const arr = [1, 2, 3, 4];
const newArr = arr.with(2, 10);
console.log(arr); // [1, 2, 3, 4] - original array remains unchanged
console.log(newArr); // [ 1, 2, 10, 4 ] - new array with the element at index 2 replaced