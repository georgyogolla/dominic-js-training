// decrement number in each iteration
for(let i = 100; i >= 0; i-= 10){
    console.log(i);
    
}

// INFINITE LOOPS
// for(let i = 10; i >= 0; i++){
//     console.log(i);
    
// }

// for loops with Arrays
const animals = ["bears", "cow", "Goat", "sheep"];
//loop over animals
for(let i = 0; i < animals.length; i++){
    console.log(i, animals[i]);
}

// NESTED LOOPS
let str = "GOAT";
for(let i = 0; i <= 5; i++){
    console.log("OUTER: ", i);
    
    for(let j = 0; j < str.length; j++){
        console.log("INNER: ", str[j]);
    }
}

// COMMON PATTERN

