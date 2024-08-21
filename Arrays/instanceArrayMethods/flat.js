// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// SYNTAXT
// flat()
// flat(depth)

// The flat() method is a copying method. It does not alter this but instead returns a shallow copy that contains the same elements as the ones from the original array.


const arr = [1, 2, [3, 4, [5, 6]], 7];
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ], 7 ]
