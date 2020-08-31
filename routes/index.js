const express = require('express');
const router = express.Router();
const Ctrl = require('../controllers/games')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/games');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;