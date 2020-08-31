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
  pokeView,
  pokeQuery
}

function pokeView(req, res) {
  res.render('games/new', { pokemon: null })
}

function pokeQuery(req, res) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.query.toLowerCase()}`)
  .then(response => {
      console.log(response.data.species.name)
      res.render('games/new', { pokemon: response.data })
  })
}

function index(req, res) {
    Game.find({})
    .then(users => {
      res.render('games/index', { user: req.user, users })
    })
}
