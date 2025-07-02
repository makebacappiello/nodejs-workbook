// 🧠 Your Task:
// 1. Write JavaScript code below that reverses the `inputString` using a for loop.
// 2. Store the reversed string in the variable called `reversedString`.
// 3. Use `console.log()` to print the value of `reversedString`.
// 4. Run this file in your terminal using: `node reverseString.js`

// ✅ If your code works, you should see the reversed string printed in the terminal.
// For example, reversing "Javascript Rocks!" should print:
// "!skcoR tpircSavaJ"

// -------------------------------------

const inputString = "Javascript Rocks!";
let reversedString = "";
for (var i = inputString.length - 1; i >= 0; i--) {
  reversedString += inputString[i];
}
// Your code here

console.log(reversedString);
