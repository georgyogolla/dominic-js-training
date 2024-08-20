// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
const arr = ["a", "b", "c", "d", "e", "f"];
const iterator = arr.entries();
console.log(iterator.next().value);

// Iterating with index and element
const arr1 = ["a", "b", "c", "d", "e"];
for(const [idx, elemnt] of arr1.entries()){
    console.log(`${idx} : ${elemnt}`);
    
} 


const array = ["a", "b", "c"];
// const arrayEntries = array.entries();
// console.log(arrayEntries);
for(const entry of array.entries()) {
    console.log(entry);    
}

// Iterating sparse arrays
// entries() will visit empty slots as if they are undefined.
console.log("---- Iterating sparse arrays ----");

const sparseArray = [1, , 3];
for(const entry of sparseArray.entries()) {
    console.log(entry);    
}

// Calling entries() on non-array objects
// The entries() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.
const obj = {a: 1, b: 2, c: 3, length: 3};
for (const props of Array.prototype.entries.call(obj)){
    console.log(props);
    
}


