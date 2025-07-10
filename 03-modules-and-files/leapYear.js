/* 
YOUR TASK: 
Create a program that checks to see if the current year is a leap year.
Use the Moment module: https://www.npmjs.com/package/moment and read its documentation to find out how to determine whether a year is a leap year.

REQUIREMENTS:
- Your program should accept 1 user input: a year (such as "January")
- Your program should output a console.log() message that says whether the inputted year is a leap year, such as...
    - "2024 is a leap year!"
    - "1979 is not a leap year!"
*/

import moment from "moment";

moment().isLeapYear();

let year = Number(process.argv[2]);

let leapYear = moment([year]).isLeapYear(); // true
console.log(leapYear);
moment([2001]).isLeapYear(); // false
moment([2100]).isLeapYear(); // false

console.log(year);
if (leapYear === true) {
  console.log(`${year} is a leap year!`);
} else {
  console.log(`${year} is not a leap year!`);
}
