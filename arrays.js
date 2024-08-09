//Several of the built-in array methods (e.g., join(), slice(), indexOf(), etc.) take into account the value of an array's length property when they're called.

//Other methods (e.g., push(), splice(), etc.) also result in updates to an array's length property.

// using push to add elements to an empty array
let carModels = [];
console.log(`Length before pushing elements ${carModels.length}`);//0
carModels.push("Tesla Model 3", "Toyota Lexus", "Audi Q7", "Subaru Impreza", "Nissan Note");
console.log(`Length after pushing elements ${carModels.length}`);//5
carModels[1] = "Mercedes Maybach S-Class Pullman ";
// console.log(carModels);
console.log(`Length after adding an element to a specific index ${carModels.length}`);//6
//console.log(carModels[1]);// Toyota Lexus;
carModels.push("Toyota Prado");
console.log(`Length after pushing another element ${carModels.length}`);//7

//Increasing the length extends the array by adding empty slots without creating any new elements — not even undefined
carModels.length = 20;
console.log(`Length after increasing the length ${carModels.length}`);//20
carModels[19] = "Suzuki";
console.log(carModels[19]);//undefined
carModels.push("v8");// adds an element to the end of an array
console.log(carModels[20]);

// Decreasing the length property does, however, delete elements.
const functionKeys = [];
functionKeys.push('f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12');
console.log(functionKeys);
console.log(`Length after pushing: ${functionKeys.length}`);//12
// Decreasing the length property
functionKeys.length = 5;
console.log(`Length after decreasing: ${functionKeys.length}`);// 5
console.log(functionKeys);

// If the length property is made non-writable, the array will not be able to update it.
const alphabets = ["a", "b", "c", "d"];
// Object.defineProperty(alphabets, 'length', {writable: false});
alphabets.push("e");
console.log(alphabets); // TypeError: Cannot assign to read only property 'length' of object '[object Array]'

const colors = ['red', 'green', 'yellow'];
colors.length = 5;
colors[4] = 'pink';

// .forEach() won't visit any empty slots in the array
// colors.forEach((color, index) => {
//     console.log(this);
//     console.log(`Index: ${index}, Color: ${color}`);

// });

// colors.forEach(function(color, index){
//     console.log(this);
//     console.log(`Index: ${index}, Color: ${color}`);
    
// });

// Newer methods (e.g. keys) do not treat empty slots specially and treat them as if they contain undefined. 
// Methods that conflate empty slots with undefined elements include the following: entries(), fill(), find(), findIndex(), findLast(), findLastIndex(), includes(), join(), keys(), toLocaleString(), toReversed(), toSorted(), toSpliced(), values(), and with().

const eplTeams = ["arsenal", "man u", "chelsea"];
eplTeams.length = 8;
eplTeams[7] = "everton";

const iteratedTeams = eplTeams.keys();

for(team of iteratedTeams){
    console.log(`${team}:${eplTeams[team]}`);
}
// undefined is returned for empty slots in the array
// Arrays stores their values by reference. References may refer to some imaginary/unique addres like IP addresses somewhere in the memory
// example:
const nums = [1, 2, 3];
const nums2 = nums;// elements of nums are copied into the nums2
nums.push(5);
// both nums2 and nums will be updated with the pushed element because both arrays points to the same reference in the memory

console.log(nums);// [ 1, 2, 3, 5 ]
console.log(nums2); // [ 1, 2, 3, 5 ]

// STATIC METHODS
// Static methods can only be called with the prefix Array. 
// They relate directly to an Array as a whole, rather than a specific array that you have created or are working with.

// The Array.from() 
// - static method creates a new, shallow-copied Array instance from an iterable or array-like object
// SYNTAX
// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)

// To convert an ordinary object that's not iterable or array-like to an array (by enumerating its property keys, values, or both), use Object.keys(), Object.values(), or Object.entries(). 
// To convert an async iterable to an array, use Array.fromAsync().

const obj1 = {a:1, b:2, c:3};
// use Object.keys to convert the obj1 keys to an iterable array
console.log(Object.keys(obj1));//keys as an array

// use Object.values to convert the obj1 values to an iterable array
console.log(Object.values(obj1));//values as an array

// use Object.entries to convert the obj1 entries to an iterable array
console.log(Object.entries(obj1));//entries as an array

// convert a string into an array
console.log(Array.from("Hello, World!"));// ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]

// use Array.from() with Set()
const set = new Set(["hello", "hello", "kenya"]);
console.log(Array.from(set));// [ 1, 2, 3, 4, 5 ]

console.log(Array.from("kenya, yetu"));

// using Array.from() with map()
const map = new Map([[1, "a"], [3, "b"], [5, "c"]]);// Map expets array like key-value pairs
console.log(Array.from(map));

// get keys from map variable
console.log(Array.from(map.keys()));
// get values from map variable
console.log(Array.from(map.values()));