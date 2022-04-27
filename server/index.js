const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//create a book
app.post("/books", async (req, res) => {
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
  