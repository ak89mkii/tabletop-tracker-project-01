const Game = require('../models/game')

module.exports = {
  create, 
  index,
  removeFromLibrary,
}

function index(req, res) {
    Game.find({})
    .then(users => {
      res.render('games/index', { user: req.user, users })
      })
}

function create(req, res) {
  req.body.name = req.user.name
  Game.create(req.body, function(err, game) {
    console.log(game)
    res.redirect("/games/")
  })
}

function removeFromLibrary(req, res) {
  Game.findByIdAndDelete(req.params.id, function(err) {
    console.log(req.params.id)
    res.redirect('/games/')
  })
}




