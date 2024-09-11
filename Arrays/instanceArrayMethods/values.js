// The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.
const alphas = ['a', 'b', 'c', 'd', 'e'];
const iterator = alphas.values();

console.log(iterator.next().value); // "a" - returns the first item in the array

// return all elements in the array 
for(const val of alphas){
    console.log(val);
}


// Calling values() on non-array objects
// The values() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.

const obj = {
    length: 2,
    0: "a",
    1: "b",
    2: "c", // ignored by values() since length is 2
  };

  for(const v of Array.prototype.values.call(obj)){
    console.log(v);
    
  }