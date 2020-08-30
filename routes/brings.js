const express = require('express')
const router = express.Router()
const bringsCtrl = require('../controllers/brings')

router.post('/games/:slug/brings',isLoggedIn, bringsCtrl.create)
router.delete('/games/:slug/brings',isLoggedIn, bringsCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router