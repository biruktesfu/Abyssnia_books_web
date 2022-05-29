const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// Get Request
router.get("/", function (req, res) {
  res.send("Books Home");
});

router.get("/all", async (req, res) => {
  try {
    const allBooks = await pool.query("SELECT * FROM books");
    res.json(allBooks.rows);
  } catch (err) {
    console.error(err.message);
  }
});


router.get('/:bookid', async (req, res) => {
    res.send('Book Id')
  })

router.get('/search', async (req, res) => {
    res.send('Search Book')
  })    

// Post Request
router.post('/create', async (req, res) => {
  res.send("Create Book");
  })

// Post Request
router.put('/edit',  async (req, res) => {
    res.send('Edit Book')
  })

// Delete Request
router.delete('/delete',  async (req, res) => {
    res.send('Delete Book')
  })

module.exports = router;
