// Adds one or more elements to the front of an array, and returns the new length of the array.
const arr = [1, 2, 3];
const added = arr.unshift(0, -1);
console.log(arr); // [0, -1, 1, 2, 3]
console.log(added); // 5

// The unshift() method modifies the original array, and it returns the new length of the array.