/* 

To run this file use the node command:

node dogAgeCalculator.js petName (Number to represent dog Years)

*/

// This console gives the user access to the file from the prompt in the console.
console.log(process.argv);
// these are the variables used in this code
// Thie first variable accesses the third set in the array but it will be the first input from the user

let dogName = process.argv[2];
// This variable will access the 4th set in the array but it is set to expect a number from the user's input

let dogYear = Number(process.argv[3]);
// This variable is not set to a specific value because it is expected to change based on the user's input
let humanYear;

//these if else statements set the conditions to work out the accurate age of the dog:

if (dogYear === 1) {
  humanYear = 15;
} else if (dogYear === 2) {
  humanYear = 15 + 9;
} else if (dogYear > 2) {
  let overTwoYears = dogYear - 2;
  humanYear = 24 + overTwoYears * 5;
} else {
  // This line of code is to check for errors and let the user know
  console.log(
    "You did not enter whole numbers greater than 0 for the dog's age"
  );
}
// This will be the Output based on the use of template literals ie the values that have been entered by the user that have been defined by the preset variables and calculated via use of the if else statements.

console.log(
  `Your dog ${dogName} is ${dogYear} years old, but that's ${humanYear} years old in dog years!`
);
