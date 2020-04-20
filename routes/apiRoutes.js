var express = require('express');
var router = express.Router();

// root directory == "/api/"
router.get('/', function (req, res, next) {
  res.json({
    success: true,
    client_id: process.env.BGA_CLIENT_ID,
    client_secret: process.env.BGA_CLIENT_SECRET
  });
});

module.exports = router;
