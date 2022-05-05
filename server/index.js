const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

////////////////////////////////////////////////////////////////////////////////////////////
// Users Web API
////////////////////////////////////////////////////////////////////////////////////////////

app.post("/signin", async (req, res) => {
  res.send("Hello Login");
});

app.get("/signup", async (req, res) => {
  res.send("Hello Sign In");
});

//get all users
app.get("/users/all", async (req, res) => {
  try {
  } catch (error) {}
});

//create a user
app.post("/users/create", async (req, res) => {
  try {
  } catch (error) {}
});

//delete a user
app.post("/users/delete", async (req, res) => {
  try {
  } catch (error) {}
});

//edit a user
app.post("/users/edit", async (req, res) => {
  try {
  } catch (error) {}
});

////////////////////////////////////////////////////////////////////////////////////////////
// Books Web API
////////////////////////////////////////////////////////////////////////////////////////////

//create a book
app.post("/books/create", async (req, res) => {
  try {
    const { description } = req.body;
    const newBook = await pool.query(
      "INSERT INTO books (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newBook.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a book
app.post("/books/delete", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all Books
app.get("/books", async (req, res) => {
  try {
    const allBooks = await pool.query("SELECT * FROM books");
    res.json(allBooks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
