// The fill() method of Array instances changes all elements within a range of indices in an array to a static value. 
//It returns the modified array.

// fill(value)
// fill(value, start)
// fill(value, start, end)

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.fill(0)); // [0, 0, 0, 0, 0]

console.log(numbers.fill(6, 2)); // [1, 2, 6, 6, 6]
console.log(numbers);


// The fill() method is a mutating method. It does not alter the length of this, but it will change the content of this.

// The fill() method fills empty slots in sparse arrays with value as well.

// The fill() method is generic. It only expects the this value to have a length property. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]

fill(4, 1, 2) 
// means "fill the array with 4, starting from index 1 and stopping before index 2."
// The array [1, 2, 3] will have its value at index 1 replaced by 4. The array becomes [1, 4, 3].

// Using fill() to create a matrix

const arr = new Array(3)
result = [empty, empty1, empty2];
// filling arr with elements
for(let i = 0; i < arr.length; i++){
arr[i] = new Array(4).fill(1);
result = [[em1, em2, em3, em4], [em1, em2, em3, em4], [em1, em2, em3, em4]];
}
arr[0][0] = 5;
first arr[0] = // first element of the bigger array which is also an array - [1, 1, 1, 1]
[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];

second arr[0] = // first elemt of the first inner array - [1, 1, 1, 1]
[[5, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];

// Calling fill() on non-array objects
// The fill() method reads the length property of this and sets the value of each integer-keyed property from start to end.

const obj = {
    length: 2,
    0: "a",
    1: "b",
    2: "c", // ignored by fill() since length is 2
  };
  console.log(Array.prototype.fill.call(obj, "x")); // ["x", "x"]

