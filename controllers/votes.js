const Game = require('../models/game')
const Vote = require('../models/vote')

module.exports = {
    index
}

function index(req, res) {
    res.render('votes/index')
}