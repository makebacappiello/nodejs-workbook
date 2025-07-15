# Recipe API Server with Express.js

### Introduction

In this project, you'll build a basic API server using Express.js.

The server will handle HTTP `GET` requests that let us:

1. Get all recipes
2. Get one recipe by its index in the array
3. Delete a recipe by its index
4. Update a recipe's name by its index

You'll use Express to build a web server that exposes API endpoints for reading and writing recipe data from a `data.json` file.

---

### Setup

To get started, you will need to do the following:

1. In your `06-recipe-API-server` project folder, run `npm init -y` to initialize your `package.json` file.
1. In the Terminal, in your `07-animals-API-server-SQL` project folder, run `npm install express` to install the `express` package. You should then see `express` listed in your `package.json` file as a dependency.
1. In the `package.json` file, add the key/value pair `"type": "module"` in order to use the modern ES Module syntax.
1. Write your server code in the src/index.js file:

   - Set up your Express server using the boilerplate code
   - Define your API endpoints using `app.get()`
   - Create helper functions to handle reading and writing from the data.json file

---

### How to run your server

1. In the terminal, navigate into your `src` directory
2. Start the server by running:

   `node index.js`

3. To automatically restart the server when you make changes, use the --watch flag:

   `node --watch index.js`

---

### How to Know It’s Working

You’ll know your server is running successfully when:

- You see your custom "Server is listening..." message in the terminal

- You can visit your API routes in the browser and then receive the expected responses from your endpoints while the server is running

---

### Data Structure

The data in `data.json` is an array of recipe objects. Each recipe is an object with the following properties:

- `name` - the name of the recipe
- `cookingMethod` - the cooking method of the recipe
- `ingredients` - an array of ingredients

**There is also a backup of this file**. You will find it in `backupData.json`. This is because it is very easy to write code that deletes your data. Always have a backup!

---

## 📘 API Endpoint Overview

Base URL: `https://localhost:3000`

| Resource  | Method | Endpoint                                 | Description                          |
| --------- | ------ | ---------------------------------------- | ------------------------------------ |
| `recipes` | GET    | /get-all-recipes                         | Retrieves all recipes                |
| `recipes` | GET    | /get-one-recipe/:index                   | Retrieves one recipe by its index    |
| `recipes` | GET    | /delete-one-recipe/:index                | Deletes a recipe by its index        |
| `recipes` | GET    | /update-one-recipe-name/:index/:newTitle | Updates a recipe's name by its index |

---

## API Endpoints

---

#### Get All Recipes

When the app receives a `GET` request for all recipes, it reads from the `data.json` file and returns all recipes in JSON format.

##### Example Request

`http://localhost:3000/get-all-recipes`

##### Example Response

```json
[
  {
    "name": "Spaghetti with White Sauce",
    "cookingMethod": "stove-top boil",
    "ingredients": [
      "spaghetti",
      "butter",
      "flour",
      "milk",
      "salt",
      "pepper",
      "garlic",
      "parmesan cheese"
    ]
  },
  {
    "name": "Spaghetti with Red Sauce",
    "cookingMethod": "stove-top boil",
    "ingredients": [
      "spaghetti",
      "tomato sauce",
      "tomato paste",
      "ground beef",
      "salt",
      "pepper",
      "garlic",
      "onion",
      "parmesan cheese"
    ]
  },
  {
    "name": "Fried Chicken",
    "cookingMethod": "deep fry",
    "ingredients": ["chicken", "flour", "salt", "pepper", "garlic", "oil"]
  },
  {
    "name": "Baked Chicken",
    "cookingMethod": "oven bake",
    "ingredients": ["chicken", "salt", "pepper", "garlic", "oil"]
  }
]
```

#### Get One Recipe

When the app receives a `GET` request for a specific recipe by its index in the array, it reads from the `data.json` file and returns that recipe in JSON format.

##### Example Request

`http://locahost:3000/get-one-recipe/0`

##### Example Response

```json
{
  "name": "Spaghetti with Red Sauce",
  "cookingMethod": "stove-top boil",
  "ingredients": [
    "spaghetti",
    "tomato sauce",
    "tomato paste",
    "ground beef",
    "salt",
    "pepper",
    "garlic",
    "onion",
    "parmesan cheese"
  ]
}
```

#### Delete One Recipe

When the app receives a `GET` request to delete a specific recipe by its index, it deletes that recipe from the `data.json` file and returns a message indicating it's done so.

##### Example Request

`http://localhost:3000/delete-one-recipe/1`

##### Example Response

You can decide how to indicate that the recipe has been deleted. One method is to simply send back a string with a message that it's been deleted. Another, more common method is to send back the data that was deleted.

The way to check that you have achieved this one is to look at the data file itself and see if the recipe at that index has been removed.

#### Update the Name of One Recipe

When the app receives a `GET` request to update the name a specific recipe, it deletes that recipe in the `data.json` file and returns a message indicating it's done so.

##### Example Request

`http://localhost:3000/update-one-recipe/1/Lasagna`
