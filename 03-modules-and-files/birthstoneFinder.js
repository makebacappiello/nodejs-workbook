/* 
YOUR TASK: 
Create a program that determines the birthstone for a month inputted by the user. 
Your app should read birthstone data from the data.json file.

REQUIREMENTS:
- Your program should accept 1 user input: a year (such as "January")
- Your program should output a console.log() message that says the month's birthstone, such as...
    - "The birthstone for January is Garnet."
    - "The birthstone for July is Ruby." 
*/
//allowing the file to access the file system node module
//the fs module is built into Node
// this is tghe commonJs syntax
//const fs = require("fs");
//console.log(fs);
import { readFile } from "fs";

//get user input
//we want the user to input the month

const month = process.argv[2];

console.log(month);
function getBirthstone() {
  //we are going to use the readFile method from the data.json file
  //this method takes in 3 parameters:
  //1. - the file we want to read
  //2 -the way the file is encoded
  //3 - the function we run once we've read the file
  //fs. for older module
  readFile("./data.json", "utf8", (err, data) => {
    // console.log(data);
    const birthstoneData = JSON.parse(data);
    // tell the user their birthstone
    if (birthstoneData[month]) {
      console.log(`The birthstone for ${month} is ${birthstoneData[month]}`);
    } else {
      console.log("Invalid month. Please enter a valid month!");
    }
  });
}
//run my function
getBirthstone();
