const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games')

router.get('/new', isLoggedIn, gamesCtrl.new)
router.post('/', isLoggedIn, gamesCtrl.create)
router.get('/',isLoggedIn, gamesCtrl.index)
router.get('/:slug', isLoggedIn, gamesCtrl.show)
router.post('/:slug/library',isLoggedIn, gamesCtrl.addToLibrary)
router.post('/:slug/wishlists',isLoggedIn, gamesCtrl.addToWishlist)
router.post('/:slug/brings',isLoggedIn, gamesCtrl.addToBring)
router.post('/:slug/votes',isLoggedIn, gamesCtrl.addToVotePage)
router.delete('/:slug/library', isLoggedIn, gamesCtrl.removeFromLibrary)
router.delete('/:slug/wishlists', isLoggedIn, gamesCtrl.removeFromWishlist)

module.exports = router;