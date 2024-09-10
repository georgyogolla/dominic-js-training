// shift method removes the first element from the array and returns it
const arr = [1,2,3,4];
const removed = arr.shift();
console.log(arr); // [2,3,4]
console.log(removed); // 1

// The shift() method modifies the original array, and it returns the removed element.


// Using shift() method in while loop
// The shift() method is often used in condition inside while loop. 
// In the following example every iteration will remove the next element from an array, until it is empty

let arr2 = [1, 2, 3, 4];

while (arr2.length > 0) {
  console.log(arr2.shift());
}
console.log(arr2);
