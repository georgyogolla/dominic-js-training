// a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output
// Reusable procedures

// function declaration

// function without parameters
function grumpus(){
    
    console.log("Huuuuu..");
    console.log("You again!");
    console.log("Oooh Noo...");
       
}
grumpus();

// greet function
function greet(){
    console.log("Hi!");
    
};
greet();


// ARGUMENTS
// We can also write functions that
// accept inputs, called arguments/parameters


function square(n){
    return n * n;
    // console.log(n * n);
    
}
// square(4)
const sq = square(4);
console.log(sq);


// Parameters are essentially passed to functions by value — so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, the change is not reflected globally or in the code which called that function.

// When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function

function car(obj){
   return  obj.color = "blue";
}
let carObj = {make: "Toyota", model: "Camry", color: "green"};
console.log(carObj.color);// green

// function call
 console.log(car(carObj.color));// blue


//  When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function

function changeArray(arr){
    arr[0] = "Changed";
}
let arr = ["original", "value"];
console.log(arr[0]);// original

// function call
 changeArray(arr);
 console.log(arr[0]);// Changed

 function greet2(name){
    return `Hello, ${name}!`;
 }
 const gr = greet2("George");
 console.log(gr);

 //
 function avg(avg1, avg2){
    // let total = avg1 + avg2;
    // return total / 2;
    return (avg1 +  avg2) / 2;
  }
  const av = avg(12, 13);
  console.log(av);

  // find largest number between 2 numbers
//   function findMax(num1, num2){
//     return Math.max(num1, num2);
//   }
//   const maxNum = findMax(5, 10);
//   console.log(maxNum);

// function max(x, y){
//     // return "hello world";
//     if(x > y){
//         return x;
//     } else if( y > x){
//         return y;
//     } else {
//         // console.log("Both numbers are equal");
//         return `${x} and ${y} are equal`;
        
//     }
// }
// const maxNumber = max(10, 10);
// console.log(maxNumber);

// anonymous function expression
const max = function(x, y){
    if(x > y){
        return x;
    } else if(y > x){
        return y;
    } else {
        return `${x} and ${y} are equal`;
    }
}
console.log(max(10, 20));

 




 
 





