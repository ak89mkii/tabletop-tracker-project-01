const Game = require('../models/game')
const axios = require('axios')

module.exports = {
//     new: newGames,
//     create, 
  index,
//     show,
//     addToLibrary,
//     addToWishlist,
//     addToBring,
//     addToVotePage
}

function index(req, res) {
    Game.find({})
    .then(users => {
      res.render('games/index', { user: req.user, users })
    })
}

