// if  - run code if a given condition is true

let color = 'orange';
// syntax of if statements
if(color === 'red'){
    console.log("YEEH!");
} else if(color === 'yellow'){
    console.log("YEEH, YOU GOT IT!");
} else if(color === 'green'){
    console.log("This is very wrong!");
} else {
    console.log("NO CONDITION WAS MET!");
}

// Nesting  conditions 
let age = 20;
if(age >= 18){
    console.log("Welcome to the party!");
    if(age >= 21){
        console.log("You can drink!");
    } else {
        console.log("You can't drink yet!");
    }
} else {
    console.log("You're too young to enter!");
}

// validating password
// atleast 8 characters
// should not contain spaces

console.log("=======================Validating Passwords=====================================");
let password = "Aloo";

if(password.length >= 8){
    //check for non-alphanumeric characters
    if(/[^a-zA-Z0-9]/.test(password)){
        console.log("Password should contain at least one non-alphanumeric character!");
    } else {
        console.log("Password is valid!");
    }
    //check for spaces in a password
    if(password.indexOf(" ") !== -1){
        console.log("Password should not contain spaces!");
        
    } else {
        console.log("Correct password!");
    }
} else {
    console.log("Password should be atleast 8 characters long!");
}

// using conditionals with AND(&&)
let name = "John";
let age2 = 30;

if(name === "John" && age2 >= 21){
    console.log("You are a grown up!");
} else {
    console.log("You're too young!");
}

// using conditionals with OR(||)
let password2 = "Heo 100";
// let age3 = 15;

if(password2.length >= 8 || password2.indexOf(" ") === -1){
    console.log("This password seems to be true");
} else {
    console.log("This password seems to be false");
}

// use a variable name on its own to test whether it is true, or even that it exists (that is, it is not undefined.)

const vowels = "aeiou";
if(vowels){
    console.log(`Truee!! Those are vowels, ${vowels}`);
} else {
    console.log('Falsee!! Those are not vowels');
}

// using not(!) with conditionals
let isLoggedIn = true;
let username = "kabambe";

if(!(false || username === "Joshua")){
    console.log("You are logged in");
} else {
    console.log("You can access the site");
}

// Switch statements
let month = 13;

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}

// use switch statement with weather variables
let weather = "Coldy";

switch(weather){
    case "Sunny":
        console.log("It's a beautiful day!");
        break;
    case "Rainy":
        console.log("It's raining!");
        break;
    case "Cloudy":
        console.log("It's a bit cloudy.");
        break;
    default:
        console.log("Unknown weather condition");
}