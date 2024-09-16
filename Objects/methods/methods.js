// A method is a function associated with an object, or, put differently, a method is a property of an object that is a function


// Example of a method in JavaScript
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        
        console.log(`This is the value of this`, this);
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
       
};
const hello  = person.greet();
console.log(hello);
