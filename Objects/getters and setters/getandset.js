// A getter is a function associated with a property that gets the value of a specific property. A setter is a function associated with a property that sets the value of a specific property. Together, they can indirectly represent the value of a property.

// Within object initializers, getters and setters are defined like regular methods, but prefixed with the keywords get or set. The getter method must not expect a parameter, while the setter method expects exactly one parameter (the new value to set)

const gettterAndSetter = {
    name: "George",
    get getName() {
        return this.name;
    },
    set setName(newName) {
        this.name = newName;
    }   
}

console.log(gettterAndSetter.getName); // George
gettterAndSetter.setName = "John";


// Getters and setters can also be added to an object at any time after creation using the Object.defineProperties() method

const cr7 = {position: "forward"};

Object.defineProperties(cr7, {
    country: {get(){
        return "Portugal";
    }
    },
    team: {get(){
        return "Real Madrid";
    }
    },
    age: {
        set(num){
if (num >= 0 && num <= 100) {
                this._age = num;
            } else {
                throw new Error("Invalid age");
            }
        }
    },
    get(){
        return this._age;
    },

    ballonDores: {
        set(max){
          this._ballonDores = max / 2;
        }
    },
    get(){
        return this._ballonDores;
    }
});

cr7.age = 39;
cr7.ballonDores = 10;

console.log(cr7.country); // Portugal
console.log(cr7.team); // Real Madrid

console.log(cr7._age); // 25// set in the in the setter method

console.log(cr7._ballonDores); // 5




