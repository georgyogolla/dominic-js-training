// Strings are pieces of texts in javascript enclosed in either a single or a double quote
// Strings are indexed (0 indexed)

let firstName = "dominic";
let nameLength = firstName.length;

let nPosition = firstName[4];
// console.log(nPosition);

// console.log(nameLength);

// change case in javascript strings

let msg = "we want to the case for this particular sentence";

let msgUpperCase = msg.toUpperCase();
let toLowerCase = msgUpperCase.toLowerCase();

console.log(msgUpperCase);
console.log(toLowerCase);

// trim() - removes the trailing and leading whitespaces in a string

let str = "  I want to get rid of space here  ";
str = str.trim();
console.log(str);

// we have string methods that takes in arguments within the parentheses
// An argument is whatever goes inside the parentheses

let str2 = "catdog";

let catIndex = str2.indexOf("og");
console.log(catIndex);

// slice(startIndex, endIndex) - The end result doesn't include the end index. It includes the most immeidate index before the endIndex

let longText = "helloworldkenya";

let greetings = longText.slice(0, 5);
console.log(greetings);

let str4 = "tehehe I am so happy";
str4 = str4.replace("tehehe", "haha");
console.log(str4);

// String escape
let escapeStr = "I am a \"happy\" person";
console.log(escapeStr);

// new line character 
// let multilineStr = "I am \n a happy \n person";
let multilineStr = "I am \n a happy \n person";
console.log(multilineStr);

// single quote character
let singlQuote = 'Hello I am a \'happy\'';
console.log(singlQuote);

let backwardSlash = "hello I am a \\backward slash";
console.log(backwardSlash);

// template literals
let  sum = `I counted ${3 + 4} sheep`;
console.log(sum);

let fName = 'dominic';
// console.log(fName);
let lName = 'Kalumba';
// console.log(lName);

let fullName = `${fName} ${lName}`;
console.log(fullName);

let item = "cucumbers";
let quantity = 5;
let pricePerItem = 10;
// 'You bought 5 cucumbers at a cost of ksh50';
let totalCost = `You bought ${quantity} ${item} at a cost of $${pricePerItem * quantity}`;
console.log(totalCost);

// charAt string method
let  charAtIndex = totalCost.charAt(7);
console.log(charAtIndex);


// Comparing Strings 
let a = "2";
let b = "3";
console.log(a < b);

// Strict comparison (===)
console.log(a === b);
// double comparison (==)
console.log(a == b);

let strOne = "1";
let strTwo = "one";

console.log(strOne === strTwo);


"PUP".charAt(1);

const newStr = String(1);

const newStr2 = "1";

const newStr3 = new String(1);

const s1 = "2  +  2";

const s2 = new String("2 + 2");

const s3 = new String(2 + 2);

console.log(eval(s1));

console.log(eval(s2));

console.log(eval(s3));
console.log(eval(s3).valueOf());

// split() method should  return an array of strings

let spliter = "hello do you need some oranges?";
let splittedStr = spliter.split("");
console.log(splittedStr);

// String methods
// indexOf(), [], charAt(), replace(), slice(), length

console.log("hello".length);

// at() method 
const sentence = "hello do you need some superv paragraphs?";
const index = -1;// -1 returns the last character in a string
console.log(`Index ${index} returns character ${sentence.at(index)}`);

// comparing charAt(), slice(), and at() methods
const longTxt = "This is a comparison of three different string methods to achieve the same thing";
// Retrieve the second last character in the above string using charAt().
const usingCharAt = longTxt.charAt(longTxt.length - 2);
console.log(usingCharAt);

// Retrieve the second last character in the above string using slice().
const usingSlice = longTxt.slice(-2, -1);
console.log(usingSlice);

// Retrieve the second last character in the above string using at().
const usingAt = longTxt.at(-2);
console.log(usingAt);

// charCodeAt() returns the character code corresponding to the specified character in the string
const charCode = "This code returns the character code of the specified character in the the given index";

let index1 = -200;

const finalRes = `The character code ${charCode.charCodeAt(index1)} is for the character ${charCode.at(index1)}`;
console.log(finalRes);

// `The character code ${charCode.codePointAt(index1)} is for the character ${charCode.at(index1)}`;
// console.log(finalRes);

// concat()
const str1 = "hello";
const str3 = "world";

const combined = str1.concat(' ', str3);
console.log(combined);

// concatenate using + operator
const combined2 = str1 + ' ' + str3;
console.log(combined2);

// using template literals to concatenate strings
const combined3 = `${str1} ${str3}`;
console.log(combined3);

// endsWith()
const endsWith = "hello world";
const lastWord = endsWith.endsWith("o");
console.log(lastWord);

// includes() - It is a case sensitive method
const includes = "hello worlD";
const contains = includes.includes("D");
const contains2 = includes.toLowerCase().includes("d");
console.log(contains2);
console.log(contains);








