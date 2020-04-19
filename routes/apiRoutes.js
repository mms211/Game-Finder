var express = require('express');
var router = express.Router();

// root directory == "/api/"
router.get('/', function (req, res, next) {
  res.json({ question: "Why did the bird go to the doctor?", answer: "For Tweetment!" });
});

module.exports = router;
