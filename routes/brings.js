const express = require('express')
const router = express.Router()
const bringsCtrl = require('../controllers/brings')

router.post('/games/:id/brings', bringsCtrl.create)
router.delete('/games/:id/brings', bringsCtrl.delette)

module.exports = router