const Game = require('../models/game')
const Vote = require('../models/vote')


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
    User.find({})
    .then(users => {
      res.render('games/', { user: req.user, users })
    })
}
