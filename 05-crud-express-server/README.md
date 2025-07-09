# Web Server Codealong

## Introduction

This codealong is for a book API that will use CRUD operations to manipulate the book data in the `data.json` file.

Your task is to build out the `index.js` file to run as a web server, handling incoming GET and POST requests, as well as accessing and manipulating the JSON file.

⚠️ Note: For the purposes of this exercise, all endpoints use the `GET` method, including those that would typically use `POST`, `DELETE` or `PUT` in a real-world API.

---

## Steps to Create a Node/Express Server

1. In your project folder, run `npm init -y`
2. Install Express: `npm install express`
3. Create a `.gitignore` file and add `node_modules` to ignore that folder.
4. Create a `src` folder to hold your code. Inside it, create `index.js`.
5. In `index.js`, import all required Node modules (such as `express`)
6. Add the Express boilerplate: create the app instance, define the port, and start the listener.
7. Define API routes and any helper functions needed to read or modify `data.json`.

---

## 📘 API Endpoint Overview

Base URL: `https://localhost:3000`

| Resource | Method | Endpoint                                | Description                         |
| -------- | ------ | --------------------------------------- | ----------------------------------- |
| `books`  | GET    | /get-all-books                          | Retrieves all books                 |
| `books`  | GET    | /get-one-book/:index                    | Retrieves one book by its index     |
| `books`  | GET    | /delete-one-book/:index                 | Deletes a book by its index         |
| `books`  | GET    | /update-one-book-title/:index/:newTitle | Updates a book's title by its index |

---

## API Endpoints

---

### 🔹 GET `/get-all-books`

**Description:** Retrieves all books.

**Example Request:**

GET `/get-all-books`

**Example Response:**

The response will return an array of all the books.

```json
[
  {
    "title": "The Very Hungry Caterpillar",
    "text": "A timeless picture book following a caterpillar’s transformation through bright, colorful illustrations and simple, joyful storytelling loved by children and adults alike."
  },
  {
    "title": "Where the Wild Things Are",
    "text": "A classic story of a boy’s imaginative journey to an island of wild creatures exploring emotions of anger, love, and belonging with stunning artwork."
  }
]
```

---

### 🔹 GET `/get-one-book/:index`

**Description:** Retrieves one book at the given `index` in the array.

**Example Request:**

GET `/get-one-book/5`

**Example Response:**

```json
{
  "title": "The Very Hungry Caterpillar",
  "text": "A timeless picture book following a caterpillar’s transformation through bright, colorful illustrations and simple, joyful storytelling loved by children and adults alike."
}
```

---

### 🔹 GET `/delete-book/:index`

**Description:** Deletes one book at the given `index` in the array.

**Example Request:**

GET `/delete-one-book/5`

**Example Response:**

```
"The book was successfully deleted!"
```

---

### 🔹 GET `/update-one-book-title/:index/:newTitle`

**Description:** Update one book's title at the given `index` in the array to the new title.

**Example Request:**

GET `/update-one-book-title/5/Discombobulation`

**Example Response:**

```
"The book's title was updated!"
```
