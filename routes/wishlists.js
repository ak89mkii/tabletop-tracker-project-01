const express = require('express')
const router = express.Router()
const wishlistsCtrl = require('../controllers/wishlists')

router.get('/wishlists/index', isLoggedIn, wishlistsCtrl.index)
router.post('/wishlists/index', isLoggedIn, wishlistsCtrl.create)
router.delete('/wishlists/:id', isLoggedIn, wishlistsCtrl.removeFromWishlist)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router