const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// Get Request
router.get("/", function (req, res) {
  res.send("Book Home");
});

router.get("/all", function (req, res) {
  res.send("All Books");
});

router.get('/bookid', function (req, res) {
    res.send('Book Id')
  })

router.get('/search', function (req, res) {
    res.send('Search Book')
  })    

// Post Request
router.post('/create', function (req, res) {
    res.send('Create Book')
  })

// Post Request
router.put('/edit', function (req, res) {
    res.send('Edit Book')
  })

// Delete Request
router.delete('/delete', function (req, res) {
    res.send('Delete Book')
  })

module.exports = router;
