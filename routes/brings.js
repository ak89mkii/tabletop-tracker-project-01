const express = require('express')
const router = express.Router()
const bringsCtrl = require('../controllers/brings')

router.get('/brings/new',isLoggedIn, bringsCtrl.new)
// router.post('/:id',isLoggedIn, bringsCtrl.create)
// router.delete('/:id',isLoggedIn, bringsCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router