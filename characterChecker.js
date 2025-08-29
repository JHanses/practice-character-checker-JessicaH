// This program asks the user for a word or phrase and an index,
// then prints the character at that index (if it exists).

const readline = require('readline-sync');

// Ask the user to enter a word or phrase
let userString = readline.question("Enter a word or phrase: ");

// Ask the user to enter an index (as a number)
let index = readline.question("Enter the index of the character you want to see: ");

// Convert the index from a string to a number
index = parseInt(index);

// Get the character at the given index
let character = userString[index];

// Check if the character exists at that index
if (character !== undefined) {
    // If it exists, print it
    console.log("The character at index " + index + " is '" + character + "'.");
} else {
    // If it doesn't exist, print an error message
    console.log("Invalid index!");
}