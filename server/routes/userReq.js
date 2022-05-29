const router = require("express").Router();
const pool = require("../db");

// Get Request
router.get("/all", async (req, res) => {
  try {
    const allUser = await pool.query("SELECT * FROM users");
    res.json(allUser.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:useremail", async (req, res) => {
  try {
    const { user_email } = req.params;
    const userid = await pool.query("SELECT * FROM users WHERE user_email = $1" , [user_email]);
    res.json(userid.rows);
} catch (err) {
  console.error(err.message);}
});

// Post Request
router.post("/create", async (req, res) => {
  res.send("Create user");
});

// Delete Request
router.delete("/delete", async (req, res) => {
  res.send("Delete user");
});

// Put Request
router.put("/edit",  async (req, res) => {
  res.send("Edit user Info");
});

module.exports = router;



// router.post("/create", async (req, res) => {
//   try {
//     const { user_name } = req.body;
//     const { user_email } = req.body;
//     const { password } = req.body;
//     const { username } = req.body;
//     const { phone_number } = req.body;
//     const { id_img } = req.body;
//     const { profile_img } = req.body;
//     const newUser = await pool.query(
//       "INSERT INTO user (description) VALUES($1) RETURNING *",
//       [description]
//     );
//     res.json(newUser.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
//   res.send("Create user");
// });
