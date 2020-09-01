const Game = require('../models/game')
const axios = require('axios')

module.exports = {
//     new: newGames,
  create, 
  index,
//  show,
removeFromLibrary,
//  addToWishlist,
//  addToBring,
//  addToVotePage
}

function index(req, res) {
    Game.find({})
    .then(users => {
      res.render('games/index', { user: req.user, users })
    })
}

function create(req, res) {
  const game = new Game(req.body)
  game.save(function(err) {
    console.log(game)
    res.redirect('/games/')
  })
}

function removeFromLibrary(req, res) {
  Game.findByIdAndDelete(req.params.id, function(err) {
    console.log(req.params.id)
    res.redirect('/games/')
  })
}




