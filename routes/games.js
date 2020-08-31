const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games')

// router.get('/new', isLoggedIn, gamesCtrl.new)
router.post('/', isLoggedIn, gamesCtrl.create)
router.get('/games', isLoggedIn, gamesCtrl.index)
// router.get('/:slug', isLoggedIn, gamesCtrl.show)
// router.post('/:slug/brings',isLoggedIn, gamesCtrl.addToBring)
// router.post('/:slug/votes',isLoggedIn, gamesCtrl.addToVotePage)
// router.post('/:slug/library',isLoggedIn, gamesCtrl.addToLibrary)
// router.delete('/:slug/library', isLoggedIn, gamesCtrl.removeFromLibrary)
// router.post('/:slug/wishlists',isLoggedIn, gamesCtrl.addToWishlist)
// router.delete('/:slug/wishlists', isLoggedIn, gamesCtrl.removeFromWishlist)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;