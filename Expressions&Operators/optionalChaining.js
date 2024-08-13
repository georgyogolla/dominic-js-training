// OPTIONAL CHAINING OPERATOR (?.)

// accessing nested properties
const food = {
    drinks: {
      cold: "milk",
      warm: "tea"
    },
    fruits: "mango"
    
  }
  
  const sweetFood = food.vegetable?.fruits;
  console.log(sweetFood);// if vegetable is undefined or null then the result will be undefined
  
  const sugar = food.drinks?.warm
  console.log(sugar);// tea 

  // safe method calls  
  const user = {
    name: "Bob",
    greet() {
      return "Hello!";
    },
  };
  
console.log(user.greet?.()); // "Hello!"
console.log(user.farewell?.()); // undefined (no error)

// safe array indexing
const arr = [1, 2, 3];
console.log(arr?.[1]);   // 2
console.log(arr?.[5]);   // undefined (no error)
console.log(null?.[0]);  // undefined (no error)
