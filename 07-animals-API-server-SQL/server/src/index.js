// Animals API

// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

// Importing our Node modules
import express from "express"; // The framework that lets us easily build a web server

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

// Helper function for /get-one-animal/:name

// Helper function for /delete-one-animal/:name

// Helper function for /add-one-animal

// Helper function for /update-one-animal

// ---------------------------------
// API Endpoints
// ---------------------------------

// GET /get-all-animals

// GET /get-one-animal/:name

// GET /delete-one-animal/:name

// POST /add-one-animal

// POST /update-one-animal
