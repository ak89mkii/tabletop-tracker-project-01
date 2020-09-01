const express = require('express')
const router = express.Router()
const wishlistsCtrl = require('../controllers/wishlists')

router.get('/', isLoggedIn, wishlistsCtrl.index)
router.post('/wishlists', isLoggedIn, wishlistsCtrl.create)
router.delete('/wishlists/:id', isLoggedIn, wishlistsCtrl.removeFromWishlist)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router