let text = "Learning JavaScript is fun!";

// Activity 1: Search Strings //
let hasJavaScript = text.includes("JavaScript");
console.log(`Does the text include "JavaScript"? ${hasJavaScript}`);

let indexOfFun = text.indexOf("fun");
console.log(`The word "fun" starts at index: ${indexOfFun}`);

// Activity 2: Transform Strings //
let text1 = " CODE BOOTCAMP ";
let text1Clean = text1.toLowerCase().trim().replace("bootcamp", "JavaScript")
console.log(text1Clean);

// Activity 3: Breaking Apart a Sentence //
let text2 = "Coding is fun and educational";
let words = text2.split(" ");
console.log(words);

// Activity 4: Retrieving Substrings //
let text3 = "Bootcamp"
console.log(text3.charAt(0));
console.log(text3.slice(4));

// Advanced Challenge //
let customer = "John Doe";
let order = "apple, banana, grape";
let total = "Total: $20.50";
console.log(customer);
console.log(order.split(","));
console.log(total.toUpperCase());

// Practice Problem 2 //

let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript1 = inputString.includes("JavaScript");
let codingPosition = inputString.indexOf("Coding");
let startsWithWelcome = inputString.trim().startsWith("Welcome");
let endsWithToday = inputString.endsWith("today.");

// 2. Transforming
let lowercaseString = inputString.toLowerCase();
let uppercaseString = inputString.toUpperCase();
let trimmedString = inputString.trim();
let replacedString = inputString.replace("JavaScript", "coding");

// 3. Breaking Apart
let wordsArray = inputString.trim().split(" ");

// 4. Retrieving
let firstCharacter = inputString.trim().charAt(0);
let extractedBootcamp = inputString.slice(24, 32);

// Log all results
console.log({
  hasJavaScript1,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});

