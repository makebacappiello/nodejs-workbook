// Let's make a CRUD (Create, Read, Update, Delete) app that runs on the CLI (Command Line Interface)!
// We'll start with the "Read" part — reading the books data from the data.json file.
//import the readFile from the fs (file System) built in module.

import { readFile } from "fs";

//---------------------------------------------------------
//GET ALL BOOKS
//---------------------------------------------------------
// Get all books and print them to the console
function getAllBooks() {
  // TODO: Read the file, parse the JSON, and log each book's title and text
  //read the data.json file to get the books data

  // Reading the data.json file to get the books data
  readFile("./data.json", "utf8", (err, data) => {
    // parse the JSON and turn it into Javascript
    const parsedBooks = JSON.parse(data);

    // loop through all the books and print them to the console
    parsedBooks.forEach((book) => {
      console.log(book.title);
      console.log(book.text + "\n");
    });
  });
}

// Get one book by index and print it to the console

//----------------------------------------------------------------
//GET ONE BOOK BY INDEX
//----------------------------------------------------------------


// Get one book by index and print it to the console
function getOneBook(index) {
  // TODO: Read the file, parse the JSON, and log only the book at the given index

  // read the file and get the data
  readFile("./data.json", "utf8", (err, data) => {
    // error handling
    if (err) {
      console.log(err);
      return;
    }

    try {
      const parsedBooks = JSON.parse(data);

      // error handling: if the user passes in a valid index
      if (index === undefined || index > parsedBooks.length - 1 || index < 0) {
        const book = parsedBooks[index];

        console.log(book.title);
        console.log(book.text);
      }
    } catch (error) {
      console.log(error);
    }
  });
}


//-------------------------------------------------------------------
//HANDLE USER INPUT AND RUN THE CORRECT FUNCTION
//-------------------------------------------------------------------


// Read user input from the command line
const action = process.argv[2]; // e.g. "getAllBooks"
const bookIndex = Number(process.argv[3]); // e.g. "3"

// console.log(process.argv);

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