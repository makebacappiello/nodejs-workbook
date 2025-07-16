// Write your Recipe CRUD App code here!

// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------
// ----------------------
// BOILERPLATE CODE TO SET UP THE SERVER
// ----------------------

// importing our Node modules
import express from "express"; // the framework we use to build a web server
import fs from "fs/promises"; // the File System module that lets us read files
import { readFile, writeFile } from "fs/promises";

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

// ---------------------------------
// Helper Functions
// ---------------------------------
async function getAllRecipies() {
  const data = await fs.readFile("../data.json", "utf8");
  return JSON.parse(data);
}

// ---------------------------------
// GET-ONE-RECIPIE
//----------------------------------

async function getOneRecipie(recipieIndex) {
  const data = await fs.readFile("../data.json", "utf8");
  const parsedData = JSON.parse(data);
  const parsedRecipie = parsedData[recipieIndex];
  return parsedRecipie;
}

// ---------------------------------
// API Endpoints
// ---------------------------------

// TODO: API Endpoint for handling GET requests to /get-all-recipes

app.get("/get-all-recipies", async (req, res) => {
  const recipies = await getAllRecipies();
  console.log("THESE ARE THE RECIPIES");

  // send the recipies data as JSON in the response
  //res.send(JSON.stringify(recipies));
  res.json(recipies);
});

// TODO: API Endpoint for handling GET requests to /get-one-recipe/:index

app.get("/get-one-recipie/:index", async (req, res) => {
  // we got the user's info
  const recipieIndex = req.params.index;

  // we need to get the recipie from the data.json
  const recipie = await getOneRecipie(recipieIndex);
  console.log(recipie, `THESE IS THE RECIPIE FROM ${recipieIndex}`);

  // then send the recipie back in the response
  //res.send(JSON.stringify(recipie));
  res.json(recipie);
});

// TODO: API Endpoint for handling GET requests to /delete-one-recipe/:index

// TODO: API Endpoint for handling GET requests to /update-one-recipe-name/:index/:newName
