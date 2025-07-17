// ----------------------
// BOILERPLATE CODE TO SET UP THE SERVER
// ----------------------

// importing our Express modules to build a web server easily
import express from "express";

//Imports file system functions that return Promises — so that I can await reading and writing to files like data.json
import fs from "fs/promises";

// Creating an instance of the express module so that we can use all of its superpowers, including its functions, properties, etc.
// I will use it to define my routes
const app = express();

// Defines which port our server should listen to receive requests. I'll access your app by going to http://localhost:3000
const port = 3000;

// The code below tells Express to automatically parse incoming JSON in requests (e.g., from a POST body). Our server will receive data as JSON, and respond with JSON
app.use(express.json());

// The function below starts the server and logs a message to let me know it’s running
app.listen(port, () => {
  console.log(`My server is listening on port ${port}!`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------

// This function reads my data.json file from the parent folder
//Then it converts the JSON text into a real JavaScript object/array
//Then it returns it.
async function getAllRecipies() {
  const data = await fs.readFile("../data.json", "utf8");
  return JSON.parse(data);
}

// ---------------------------------
// GET-ONE-RECIPIE
//----------------------------------
//Similar to getAllRecipies, but only returns one recipe based on the index passed in.
async function getOneRecipie(recipieIndex) {
  const data = await fs.readFile("../data.json", "utf8");
  const parsedData = JSON.parse(data);
  const parsedRecipie = parsedData[recipieIndex];
  return parsedRecipie;
}

// ---------------------------------
// API Endpoints
// ---------------------------------

// This is the API Endpoint for handling GET requests to /get-all-recipes
// When the user visits /get-all-recipies, it:
1;
//Calls getAllRecipies().
//2.Logs the recipes to your terminal.

app.get("/get-all-recipies", async (req, res) => {
  const recipies = await getAllRecipies();
  console.log("THESE ARE THE RECIPIES");

  // 3. Sends the recipies data as JSON in the response
  //res.send(JSON.stringify(recipies));
  res.json(recipies);
});

// This is the API Endpoint for handling GET requests to /get-one-recipe/:index
//:index is a route parameter, which comes from the URL
app.get("/get-one-recipie/:index", async (req, res) => {
  // Here is where we get the user's info that is defined as a variable
  const recipieIndex = req.params.index;

  // We use this constant to define that the program must wait to get the recipie from the data.json
  const recipie = await getOneRecipie(recipieIndex);
  console.log(recipie, `THESE IS THE RECIPIE FROM ${recipieIndex}`);

  // then send the recipie back in the response

  //res.send(JSON.stringify(recipie));
  res.json(recipie);
});
