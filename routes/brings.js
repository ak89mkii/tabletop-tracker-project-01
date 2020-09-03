const express = require('express')
const router = express.Router()
const bringsCtrl = require('../controllers/brings')

router.post('/brings/index', isLoggedIn, bringsCtrl.create)
router.get('/brings/index', isLoggedIn, bringsCtrl.index)
// router.delete('/:id',isLoggedIn, bringsCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router