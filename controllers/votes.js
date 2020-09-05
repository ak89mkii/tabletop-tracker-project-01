const Vote = require('../models/vote')
const Wishlist = require('../models/wishlist')


module.exports = {
    index,
    create,
    removeFromVote,
    add
}

function index(req, res) {
    Vote.find({})
    .then(users => {
      res.render('votes/index', { user: req.user, users })
    })
}
      
function create(req, res) {
    req.body.user = req.params.id
    Vote.create(req.body, function(err, vote) {
      console.log(vote)
      res.redirect('/votes/index')
    })
  }

function removeFromVote(req, res) {
  Vote.findByIdAndDelete(req.params.id, function(err) {
    console.log(req.params.id)
    res.redirect('/votes/index')
  })
}

function add(req, res) {
  Vote.findById(req.params.id, function(err) {
    Wishlist.create(req.body.name, function(err, game) {
          console.log('Added', game)
          res.redirect('/wishlists/index')
    })
  })
}