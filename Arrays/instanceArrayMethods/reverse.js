// The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. 
// In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

const arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [4, 3, 2, 1]

// The reverse() method does not create a new array, but modifies the original array. If you want to keep the original array unchanged, you can use the slice() method.


// Calling reverse() on non-array objects
// The reverse() method reads the length property of this.
// It then visits each property having an integer key between 0 and length / 2, and swaps the two corresponding indices on both ends, deleting any destination property for which the source property did not exist.

const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
    3: 33, // ignored by reverse() since length is 3
  };
  console.log(Array.prototype.reverse.call(arrayLike));
  // { 0: 4, 3: 33, length: 3, unrelated: 'foo' }
  // The index 2 is deleted because there was no index 0 present originally
  // The index 3 is unchanged since the length is 3
  