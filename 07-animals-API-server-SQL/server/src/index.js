// Animals API

// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

// Importing our Node modules
import express from "express";

// The framework that lets us easily build a web server
import pg from "pg"; // pg stands for PostgreSQL, for talking to the database
import config from "./config.js"; // we need access to our database connection credentials

// connect to our PostgreSQL database, or db for short
const db = new pg.Pool({
  connectionString: config.databaseUrl, // credentials to access the database — keep this private!
  ssl: true, // we will use SSL encryption when connecting to the database
});

const app = express(); // Creating an instance of the express module

app.use(express.json()); // This server will receive and respond in JSON format

const port = 3000; // Declaring which port to listen to to receive requests

// Turning on our server to listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------

// Helper function for /get-all-animals

async function getAllAnimals() {
  const result = await db.query("SELECT * FROM animals");
  console.log(result);
  return result.rows;
}

// Helper function for /get-one-animal/:name
async function getOneAnimal(animalName) {
  const result = await db.query("SELECT * FROM animals WHERE name = $1", [
    animalName,
  ]);
  return result.rows[0];
}

// Helper function for /delete-one-animal/:name
async function deleteOneAnimal(animalName) {
  const result = await db.query("DELETE FROM animals WHERE name = $1", [
    animalName,
  ]);
}
//______________________________________________________________________________

// Helper function for /update-one-animal with detailed comments
//_______________________________________________________________________________

//this async declares that the function is asynchronous allowing it to use the await keyword
//The function will always return a Promise
async function //the updateOneAnimal describes what the function will do
//the part of this code (animal) indicates that the function accepts one parameter, an animal object. This object must contain the new data for the animal as well as an identifier (in this case, name) to locate the correct record in the database. For example: { name: "Leo", category: "Big Cat", can_fly: false, lives_in: "Savanna" }
updateOneAnimal(animal) {
  // the await pauses the execution of the updateOneAnimal function until the db.query operation completes. This ensures that the code doesn't continue until the database has confirmed the update.

  await db.query(
    //db.query(...): The method used to send a query to the database connected via the db object.
    //UPDATE animals: This is the SQL command to modify existing rows in the animals table.
    //SET category = $1, can_fly = $2, lives_in = $3: This part specifies which columns to update and what new values to use. The $1, $2, and $3 are placeholders that will be filled by the values from the data array.
    //WHERE name = $4: This is the most critical part of an UPDATE statement. The WHERE clause is a condition that filters which row (or rows) should be updated. It says: "Only update the row where the name column matches the value that will be provided for the $4 placeholder. without the WHERE clause, the UPDATE statement would modify every single row in the table.
    "UPDATE animals SET category = $1, can_fly = $2, lives_in = $3 WHERE name = $4",
    //[...]: This is the array of values that will be safely substituted into the placeholders in the SQL query string
    //animal.category, animal.can_fly, ...: The values are pulled from the animal object passed into the function.
    //The Mapping: The database driver maps the values in the array to the placeholders in order:
    //$1 is replaced by animal.category.
    //$2 is replaced by animal.can_fly.
    //$3 is replaced by animal.lives_in.
    //$4 (for the WHERE clause) is replaced by animal.name.
    [animal.category, animal.can_fly, animal.lives_in, animal.name]
  ); //);: Closes the db.query() method call.
} //}: Closes the updateOneAnimal function definition.

// Helper function for /add-one-animal

async function addOneAnimal(animal) {
  await db.query(
    "INSERT INTO animals (name, category, can_fly, lives_in) VALUES ($1, $2, $3, $4)",
    [animal.name, animal.category, animal.can_fly, animal.lives_in]
  );
}

// ---------------------------------
// API Endpoints
// ---------------------------------

// GET /get-all-animals
app.get("/get-all-animals", async (req, res) => {
  const allAnimals = await getAllAnimals();
  // res.send(JSON.stringify(allAnimals));
  res.json(allAnimals);
});
// both functions res.send() and res.json() send a response
// res.send sends a response as a string.
// res.json sends a response that is an object

// GET /get-one-animal/:name
app.get("/get-one-animal/:name", async (req, res) => {
  const animalName = req.params.name;
  const animal = await getOneAnimal(animalName);
  res.json(animal);
});

// GET /delete-one-animal/:name

app.get("/delete-one-animal/:name", async (req, res) => {
  const animalName = req.params.name;
  deleteOneAnimal(animalName);
  res.send("The animal was successfully deleted!");
});

// POST /add-one-animal
app.post("/add-one-animal", async (req, res) => {
  const newAnimal = req.body;
  addOneAnimal(newAnimal);
  res.send("The animal was successfully added!");
});
//_________________________________________________________________________

// POST /update-one-animal with detailed comments
//__________________________________________________________________________

//app: This is an instance of the Express application.
//.post(...): This is an Express routing method. It tells the server: "When you receive an HTTP POST request, check if the URL matches the one I'm providing." POST requests are used to send data to a server to create or update a table.
//"/update-one-animal": This is the path or endpoint. It's the specific URL on your server that this code will handle. For example, if the server is running on http://localhost:3000, this code will execute for POST requests sent to http://localhost:3000/update-one-animal

app.post("/update-one-animal", async (req, res) => {
  //async (req, res) => { ... }: This is the callback function that runs when a request matches the method (POST) and path (/update-one-animal).
  //The actual word declares the function as asynchronous. It allows you to use the await keyword inside it, which is needed for handling operations that take time (like database calls) without blocking the entire server.
  //req (Request): An object containing all the information about the incoming HTTP request from the client like the request body.
  //res (Response): An object that the server uses to send a response back to the client that made the request.

  const updatedAnimal = req.body; //a new constant variable
  //the req.body takes the data payload sent by the client (e.g., {"name": "Leo", "species": "Lion"}) and stores it in the updatedAnimal variable.

  updateOneAnimal(updatedAnimal); //this line calls the function to the updatedAnimal object and perform the actual update operation in your database

  res.send("The animal was successfully updated!"); //res.send(...): This method on the response object sends a response back to the client.
}); //This parenthesis and bracket closes the callback function and the app.post method call.
