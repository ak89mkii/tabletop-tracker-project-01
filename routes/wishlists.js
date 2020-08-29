const express = require('express')
const router = express.Router()
const wishlistsCtrl = require('../controllers/wishlists')

router.post('/games/:slug/wishlists',isLoggedIn, wishlistsCtrl.create)
router.delete('/games/:slug/wishlists',isLoggedIn, wishlistsCtrl.delete)

module.exports = router