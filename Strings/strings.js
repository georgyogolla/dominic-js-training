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

// isWellFormed() returns true if the string contains a well formatted string.
console.log("Is well formed: ");
const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
  ];

 for (const str of strings) {
    console.log(str.isWellFormed());
  }  

  // catching errors in isWellFormed() method
  console.log("Catching errors in isWellFormed");

  const illFormed = "https://example.com/search?q=\uD800";

try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

if (illFormed.isWellFormed()) {
  console.log(encodeURI(illFormed));
} else {
  console.warn("Ill-formed strings encountered."); // Ill-formed strings encountered.
}


// lastIndexOf()
// The lastIndexOf() method of String values searches this string and 
//returns the index of the last occurrence of the specified substring. 
//It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number
const lastItem = "hello this is the last item in the string";

console.log(lastItem.lastIndexOf(("string")));

// match() method should  return a string representation of the string

const matches = "The Orange 2 JUice was Sweet 1."
const regex = /[a-z]/g;
console.log(matches.match(regex));

// padEnd() returns a string with spaces at the end or the the second argument provided in the method
const padEnd = "This string demonstrates the padEnd method";
console.log(padEnd.padEnd(45, "1"));

// padStart() returns a string with spaces at the beginning or the the second argument provided in the method
const padStart = "hello";
console.log(padStart.padStart(13, "world"));

// repeat() returns a new string with the original string repeated n times
const repeated1 = "hello world";
const repeated = repeated1.repeat(3);
console.log(repeated);

// replace() returns a new string with the original string. The original string will remain unchanged

// const strNew = "hello world";
// const replaced = strNew.replace("world", "universe");

const strNew = "hello world";
const replaced = /WORLD/i;
console.log(strNew.replace(replaced, "global"));

// replaceAll() replaces all occurrences of the given string

// const moreThanOne = "hello guys! hello world!";
// console.log(moreThanOne.replaceAll("hello", "Hi"));

// use replaceAll() with regex
const moreThanOne = "hello guys! Hello world!";
const pattern = /HELLO/gi
console.log(moreThanOne.replaceAll("hello", "Hi"));

// search() 
// executes a search for a match between a regular expression and this string, 
// returning the index of the first match in the string

const noneWordCharacters = "I think Ruth's dog is cuter than your dog!";
const regexPattern =  /[^\w\s']/g;
// /[^\w\s']/g;

console.log(noneWordCharacters.search(regexPattern));// returns the index number of the resulting string string

console.log(noneWordCharacters[noneWordCharacters.search(regexPattern)]);// returns the string 


// substring()  returns the substring of the string 
// It works similar to slice() except for a few differences:
// 1. The substring() method swaps its two arguments if indexStart is greater than indexEnd, 
//meaning that a string is still returned. 
//The slice() method returns an empty string if this is the case.

// 2. If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0

console.log("Replacing a string using split() and join()");

function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}

const finalResults = replaceString("World", "Web", "Brave New World");
console.log(finalResults);

// toLocaleLowerCase() 

const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);


console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);

// toLocaleUpperCase() 
// trimEnd() removes trailing spaces
console.log("Trim white spaces at the end of the string");
const toTrim = "hello     "
console.log(toTrim.trimEnd());

// trimStart() removes leading spaces
console.log("Trim white spaces at the start of the string");
const toTrimStart = "  hello"
console.log(toTrimStart.trimStart());

// valueOf() returns a string
const newString = "I am the valueOf()";
console.log(newString.valueOf());



 








