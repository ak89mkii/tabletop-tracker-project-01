const Vote = require('../models/vote')

module.exports = {
    index,
    create,
    removeFromVote,
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