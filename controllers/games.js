const Game = require('../models/game')

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
  req.body.game = req.user._id
  Game.create(req.body, function(err, game) {
    console.log(game)
    res.redirect(`/games/${req.user._id}`)
  })
}

function removeFromLibrary(req, res) {
  Game.findByIdAndDelete(req.params.id, function(err) {
    console.log(req.params.id)
    res.redirect('/games/')
  })
}




