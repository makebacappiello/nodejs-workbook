// ----------------------
// BOILERPLATE CODE TO SET UP THE SERVER
// ----------------------

// importing our Node modules
import express from "express"; // the framework we use to build a web server
import fs from "fs/promises"; // the File System module that lets us read files
//if we don't import fs/promises we wont be able to use async await syntax

// Creating an instance of the express module so that we can use all of its superpowers, including its functions, properties, etc.
const app = express();

// Define which port our server should listen to receive requests
const port = 3000;

// say that we're using JSON data type
// Our server will receive data as JSON, and respond with JSON
app.use(express.json());

// run the function that turns on the server to listen for requests on the port
app.listen(port, () => {
  console.log(`My server is listening on port ${port}!`);
});

// --------------------------
// WRITING OUR FIRST GET REQUEST
// --------------------------

// HANDLE A GET REQUEST
app.get("/", (req, res) => {
  res.send("Hello World of Makeba!");
});

// say that we're using JSON data type
// Our server will receive data as JSON, and respond with JSON
app.use(express.json());

// run the function that turns on the server to listen for requests on the port
app.listen(port, () => {
  console.log(`My server is listening on port ${port}!`);
});

// --------------------------
// WRITING OUR FIRST GET REQUEST
// --------------------------

// Handle a GET request to the API endpoint "/" which is the default endpoint, kind of like the home page
app.get("/", (req, res) => {
  res.send("Hello World, Arianna!");
});

// Handle a GET request to get the user's name
app.get("/get-user-name/:userName", (req, res) => {
  res.send(`Hello World, ${req.params.userName}!`);
});

// we will call the callback function to handle the incoming GET request

// app.get("/get-user", (req, res) => {
//   const myFormData = {
//     name: "Arianna",
//     email: "text@gmail.com",
//   };
//   // turn our Javascript data into JSON
//   const myFormDataJSON = JSON.stringify(myFormData);
//   // send the JSON data back in the response
//   res.send(myFormDataJSON);
// });

// -------------------------
// HELPER FUNCTIONS
// -------------------------

// When I declare a variable called books inside this function, it is scoped to that function, meaning I can only access it within that function

// helper function that will get the books data from data.json file
async function getAllBooks() {
  // reading the data from the data.json file
  // readFile takes in 3 parameters:
  // 1. the file path to the file with our data
  // 2. the encoding
  // 3. the callback function that you run once you've read the data

  // this syntax uses call back function
  // const booksData = fs.readFile("../data.json", "utf8", (err, data) => {
  //   return data;
  // });
  // return JSON.parse(booksData);

  // this syntax uses async /await — more modern approach
  const data = await fs.readFile("../data.json", "utf8");
  return JSON.parse(data);
}

async function getOneBook(bookIndex) {
  const data = await fs.readFile("../data.json", "utf8");
  const parsedData = JSON.parse(data);
  const parsedBook = parsedData[bookIndex];
  return parsedBook;
}

async function updateOneBookTitle(bookIndex, newTitle) {
  // GOAL: update a book's title based on its index
  //       save that new title in the data.json

  // 1. get the data from the file with readFile()
  const parsedBooks = await getAllBooks();

  // 2. get the book we want to update
  const parsedBook = parsedBooks[bookIndex];

  // 3. update the book's title
  parsedBook.title = newTitle;

  // 4. write the data back to the file with writeFile()
  const stringifiedBooks = JSON.stringify(parsedBooks);
  await fs.writeFile("../data.json", stringifiedBooks, "utf8");
}

// -------------------------
// API ENDPOINTS
// -------------------------

// handle GET requests for getting all the books from data.json
app.get("/get-all-books", async (req, res) => {
  const books = await getAllBooks();

  // send the books data as JSON in the response
  //res.send(JSON.stringify(books));
  res.json(books);
});

// getting one book by its index
app.get("/get-one-book/:index", async (req, res) => {
  // we got the user's info
  const bookIndex = req.params.index;

  // we need to get the book from the data.json
  const book = await getOneBook(bookIndex);

  // then send the book back in the response
  res.send(JSON.stringify(book));

  console.log(`The user is trying to get the book at index ${bookIndex}`);
});
// deleting a book

// updating a book's title
app.get("/update-one-book-title/:index/:newTitle", async (req, res) => {
  const bookIndex = req.params.index;
  const newTitle = req.params.newTitle;
  updateOneBookTitle(bookIndex, newTitle);

  // we can use res.send() to send a String
  // we don't need res.json() because we don't need to send JSON data
  res.send("Book's title was updated!");
});
