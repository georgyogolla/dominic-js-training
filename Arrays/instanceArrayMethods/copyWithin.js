// The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.
// copyWithin(target, start)
// copyWithin(target, start, end)

const array = [1, 2, 3, 4, 5, 6, 7];

array.copyWithin(0, 2, 3);
console.log(array); 
// [
//     3, 2, 3, 4,
//     5, 6, 7
//   ]
  

array.copyWithin(1, 0, 2);
console.log(array);// [ 3, 3, 4, 4, 5 ]

// more examples on copyWithin()
console.log("MORE EXAMPLES: ");

const array2 = ["a", "b", "c", "d", "e"];
// ["e", "d", "c", "d", "e"]// dominic
// ["a", "b", "e", "d", "e"]// george //array2.copyWithin(2, 4);
// ["e", "b", "c", "d", "e"]//array2.copyWithin(0, 4);
// ["e", "a", "c", "d", "e"]// dominic // array2.copyWithin(1, 4);
// ["a", "e", "c", "d", "e"]// george // array2.copyWithin(1, 4);

array2.copyWithin(1, 4);
console.log(array2);

// copyWithin(start, target, end)
// start - This is where copying operation is performed
// target - This is where we have the elements that should be copied
// end - THis is where copying operation ends
// We MUST maintain the length of the original array even after performing shallow copies





