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

// Helper function for /update-one-animal

async function updateOneAnimal(animal) {
  await db.query("UPDATE animals SET category = $1 WHERE name = $2", [
    animal.category,
    animal.name,
  ]);
}
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

// POST /update-one-animal
app.post("/update-one-animal", async (req, res) => {
  const updatedAnimal = req.body;
  updateOneAnimal(updatedAnimal);
  res.send("The animal was successfully updated!");
});
