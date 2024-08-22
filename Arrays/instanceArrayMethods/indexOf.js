// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

const array = [1, 2, 3, 4, 3, 5];
// const element = 3;

const index = array.indexOf(3);
console.log(index);

// The indexOf() method compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator). NaN values are never compared as equal, so indexOf() always returns -1 when searchElement is NaN.


// If the fromIndex is provided, indexOf() starts searching from that position, and if it is negative, it considers it as a position from the end of the array.


// Example:
// You cannot use indexOf() to search for NaN.
const array2 = [1, 2, NaN, 3, 4, NaN];
console.log(array2.indexOf(NaN)); // -1
console.log(array2.indexOf(NaN, 2)); // -1
console.log(array2.indexOf(NaN, -1)); // -1
console.log(array2.indexOf(NaN, -3)); // -1

// Finding all the occurrences of an element


// Example:
const indices = [];
const array3 = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array3.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array3.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

// Finding if an element exists in the array or not and updating the array
function newTeam(teams, team){
    if(teams.indexOf(team) === -1){
        teams.push(team);
        console.log(`${team} added to the teams.`);
    } else {
        console.log(`${team} already exists in the teams.`);
    }
}

const teams = ["arsenal", "man u", "chelsea"];
const manCity = newTeam(teams, "man city"); // man city added to the teams.
console.log(manCity);
const arsenal = newTeam(teams, "arsenal");
console.log(arsenal); // arsenal already exists in the teams.

// Using indexOf() on sparse arrays
// You cannot use indexOf() to search for empty slots in sparse arrays.
const sparseArray = [1, 2,, 3, 4];
console.log(sparseArray.indexOf(2)); // 1
console.log(sparseArray.indexOf(5)); // -1

// Calling indexOf() on non-array objects
// The indexOf() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.
console.log("===Using indexOf on none-array objects===");

const obj = {0: "a", 1: "b", 2: "c", length: 3};
console.log(Array.prototype.indexOf.call(obj, "b")); 
console.log(Array.prototype.indexOf.call(obj, "z")); 

// indexOf first checks obj.length, which is undefined or 0.
// With a length of 0, indexOf does not iterate through any elements, so it directly returns -1, indicating that the element was not found.

