// In JavaScript, objects are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.

const obj1 = {name: "John"};
const obj2 = {name: "John"};

console.log(obj1 === obj2); // false

const obj = {name: "John"};
const obj3 = obj;

console.log(obj === obj3); // true