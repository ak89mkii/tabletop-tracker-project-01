const express = require('express');
const router = express.Router();
const Ctrl = require('../controllers/pokemons')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/games');
});

router.get('/pokeView', isLoggedIn, Ctrl.pokeView)
router.post('/pokeQuery', isLoggedIn, Ctrl.pokeQuery)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;