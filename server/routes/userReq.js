const router = require("express").Router();
const pool = require("../db");

router.get("/all", async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM users where user_id = $1 ", [req.user]);
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});


// Post Request
router.post('/create', function (req, res) {
    res.send('Create user')
  })

// Delete Request
router.delete('/delete', function (req, res) {
    res.send('Delete user')
  })

// Put Request
router.put('/edit', function (req, res) {
    res.send('Edit user Info')
  })

module.exports = router;