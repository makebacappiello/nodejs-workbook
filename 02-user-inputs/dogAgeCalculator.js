/* 

To run this file use the node command:

node dogAgeCalculator.js petName (Number to represent dog Years)

*/

console.log(process.argv);

let dogName = process.argv[2];
let dogYear = Number(process.argv[3]);
let humanYear;

//if else statements will help this code

if (dogYear === 1) {
  humanYear = 15;
} else if (dogYear === 2) {
  humanYear = 15 + 9;
} else if (dogYear > 2) {
  let overTwoYears = dogYear - 2;
  humanYear = 24 + overTwoYears * 5;
} else {
  console.log(
    "You did not enter whole numbers greater than 0 for the dog's age"
  );
}

console.log(
  `Your dog ${dogName} is ${dogYear} years old, but that's ${humanYear} years old in dog years!`
);
