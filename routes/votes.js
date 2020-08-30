const express = require('express')
const router = express.Router()
const votesCtrl = require('../controllers/votes')

router.get('/votes/index', isLoggedIn, votesCtrl.index)
// router.post('/:slug/votes', isLoggedIn, votesCtrl.create)
// router.delete('/:slug/votes', isLoggedIn, votesCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router