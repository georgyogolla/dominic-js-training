// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const months = ["January", "February", "March", "April", "May"];

// Removing elements
months.splice(2, 2); // removes "March"
console.log("-------Removing elements-------");
console.log(months); // [ 'January', 'February', 'May' ]

// Adding elements
console.log("-------adding elements-------");
months.splice(2, 0, "June", "July"); // adds "June" and "July" at index 2
console.log(months); // ["January", "February", "June", "July", "May"]

// Updating elements
console.log("-------Updating elements-------");
months.splice(4, 0, "August"); // updates "May" to "August" at index 4
console.log(months); // ["January", "February", "June", "July", "August", "May"]

// comparing the reference of the results of reverse() and toReversed()

const rev1 = [1,2,3];
undefined
const rev2 = rev1.reverse();
undefined
rev2;
(3) [3, 2, 1]
rev1 === rev2;
true




const rev3 = [1,2,3];
rev4;
(3) [1, 2, 3]
const rev5 = rev3.toReversed();
rev5;
(3) [3, 2, 1]
rev3 === rev5;
false
rev3;
(3) [1, 2, 3]
