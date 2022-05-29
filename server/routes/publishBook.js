const router = require("express").Router();
const pool = require("../db");

// Get Request
router.get("/all", async (req, res) => {
    res.send("Publish Books");
});


module.exports = router;