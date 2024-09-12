// JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value.
// A property's value can be a function, in which case the property is known as a method.

const kylianMbappe = {
    name: "Kylian Mbappe",
    nationality: "France",
    age: 25,
    isFootballer: true,
    position: "Forward",
    20: "position",
    "teams played for": {
        psg: "france",
        realMadrid: "spain"
    },
    cars: ["Audi", "Ferrari", "Lamborghini"]
}
console.log(kylianMbappe.position);

// An object can have a property that is itself another object. For example, suppose you define an object called Person as follows:
function Person(name, age, sex){
    this.name = name,
    this.age = age,
    this.sex = sex
}

const john = new Person("John Doe", 30, "male");
console.log(john);


// Creating an Object using Constructor functions
function Car(make, model, year, owner){
    this.make = make,
    this.model = model,
    this.year = year,
    this.owner = owner   
}

const audi = new Car("Audi", "A3", 2018, john);
console.log(audi);

// Using the Object.create() method

const Animal =  {
    type: "mammal",
    food: "omnivorous"
}

const mammals = Object.create(Animal);
console.log(mammals.food);

// Accessing properties of an object
// 1. Using dot notation
const fruits = {
    apple: "red",
    banana: "yellow",
    orange: "orange"
}
const prefferedFruit = fruits.apple;
console.log(prefferedFruit);

// 2. Using square bracket notation
const vegetables = {
    carrot: "orange",
    potato: "white",
    cucumber: "green",
    "sweet banana": "yellow",
    "green-pepper": "green",
    20: "twenty"
}
const goodForTheEyes = vegetables["carrot"];
console.log(goodForTheEyes);

const sweetBanana = vegetables["sweet banana"];
console.log(sweetBanana);

// Using dot notation to access property name with a space
// console.log(vegetables."sweet banana"); // - Unexpected string

// using dot notation to access property name with an hyphen
// const spaced = vegetables."green-pepper";
// console.log(spaced); // - Unexpected string

// using dot notation to access property that starts with a number
// console.log(vegetables.20); // Unexpected string

// all the above scenarios can be solved using bracket notation

// Adding properties to an object
const obj = {};
obj.name = "John Doe";
obj.age = 30;
obj.gender = "male";
obj["height"] = "160cm"
const rand = Math.random();
obj[rand] = "This is a value associated with a random key";
const mySecondObj = {};
obj[mySecondObj] = "This is another Object";
console.log(obj);

// 

const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  };

let propertyName = "make";
myCar[propertyName] = "Ford";

// access different properties by changing the contents of the variable
propertyName = "model";
myCar[propertyName] = "Mustang";

myCar["color"];
console.log(myCar);










