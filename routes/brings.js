const express = require('express')
const router = express.Router()
const bringsCtrl = require('../controllers/brings')

router.post('/games/:slug/brings',isLoggedIn, bringsCtrl.create)
router.delete('/games/:slug/brings',isLoggedIn, bringsCtrl.delete)

module.exports = router