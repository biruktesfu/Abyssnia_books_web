const router = require("express").Router();
const pool = require("../db");

// Put Request
router.get('/get', function (req, res) {
    res.send('Get Recommendation')
  })

module.exports = router;