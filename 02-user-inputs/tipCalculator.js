console.log(process.argv);
// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js

let bill = Number(process.argv[2]);
let tipPercentage = Number(process.argv[3]);
let numGuests = Number(process.argv[4]);
//we want to calculate
// 1. the total amount after tip
//2.  the totral for each guest

// lets calculate the tip amount

let tipAmount = bill * tipPercentage;
console.log("Tip amount:", tipAmount);

//calculate the total bill

let totalBill = bill + tipAmount;
console.log("Total bill:", totalBill);

//calculate the total for each guest

let totalPerGuest = totalBill / numGuests;
console.log("Each guest owes: ", totalPerGuest);
