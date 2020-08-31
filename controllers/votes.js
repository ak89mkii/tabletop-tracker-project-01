const Game = require('../models/game')
const Vote = require('../models/vote')

module.exports = {
    index
}

function index(req, res) {
    Vote.find({})
    .then(users => {
      res.render('votes/index', { user: req.user, users })
    })
}