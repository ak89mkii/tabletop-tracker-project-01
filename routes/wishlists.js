const express = require('express')
const router = express.Router()
const wishlistsCtrl = require('../controllers/wishlists')

router.get('/games/:slug/new', isLoggedIn, wishlistsCtrl.new)
router.post('/games/:slug/wishlists',isLoggedIn, wishlistsCtrl.create)
router.delete('/games/:slug/wishlists',isLoggedIn, wishlistsCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router