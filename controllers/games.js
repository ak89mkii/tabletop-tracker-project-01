const Game = require('../models/games')
const Vote = require('../models/votes')


module.exports = {
    new: newGames,
    create, 
    index,
    show,
    addToLibrary,
    addToWishlist,
    addToBring,
    addToVotePage
}
