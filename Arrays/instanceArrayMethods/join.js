// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, 
// separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// SYNTAX
// join()
// join(separator)

const nums = [[1,2,3], [4,5,6], [7,8,9]];
console.log(nums.join('-'));

// Using join() on sparse arrays
// join() treats empty slots the same as undefined and produces an extra separator:
const sparseArray = [1,2,3,,5,6,7,8];
console.log(sparseArray.join());

// Calling join() on non-array objects
// The join() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.

const obj = {
    length: 4,
    0: "a",
    1: "b",
    2: "c",
    3: "d"
}

console.log(Array.prototype.join.call(obj, " - "));



