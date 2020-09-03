const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games')

router.post('/', isLoggedIn, gamesCtrl.create)
router.get('/games', isLoggedIn, gamesCtrl.index)
router.delete('/games/:id', isLoggedIn, gamesCtrl.removeFromLibrary)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;