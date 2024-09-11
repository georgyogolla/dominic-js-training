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




