// Let's make a CRUD (Create, Read, Update, Delete) app that runs on the CLI (Command Line Interface)!
// We'll start with the "Read" part — reading the books data from the data.json file.

import { readFile } from "fs";

// Get all books and print them to the console
function getAllBooks() {
  // TODO: Read the file, parse the JSON, and log each book's title and text
}

// Get one book by index and print it to the console
function getOneBook(index) {
  // TODO: Read the file, parse the JSON, and log only the book at the given index
}

// Read user input from the command line
const action = process.argv[2]; // e.g. "getAllBooks"
const bookIndex = process.argv[3]; // e.g. "3"

// Run the correct function based on the user's input
if (action === "getAllBooks") {
  getAllBooks();
} else if (action === "getOneBook") {
  getOneBook(bookIndex);
} else {
  console.log("Invalid action. Try one of these:");
  console.log("  node index.js getAllBooks");
  console.log("  node index.js getOneBook <index>");
}
