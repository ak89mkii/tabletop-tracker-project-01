const express = require('express');
const router = express.Router();
const bringsCtrl = require('../controllers/games')

router.get('/new', bringsCtrl.new)
router.post('/', bringsCtrl.create)
router.get('/', bringsCtrl.index)
router.get('/:id', bringsCtrl.show)

module.exports = router;