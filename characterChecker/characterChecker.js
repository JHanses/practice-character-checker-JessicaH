characterChecker

const readline = require('readline_sync");
let userString = readline.question("Enter a word or phrase: ");
let index = readline.question("Enter the index o the character you want to see: ");
index = parseInt(index); 
let character = userString[index];
if (character !== undefined) {
	console.log(`The character at index ${index} is '${character}'.`);
} else {
	console.log("Invalid index!);