const Wishlist = require('../models/wishlist')

module.exports = {
    index,
    create,
    removeFromWishlist
}

function index(req, res) {
    Wishlist.find({})
    .then(users => {
      res.render('wishlists/index',{ user: req.user, users })
    })
}

function create(req, res) {
  req.body.name = req.user.name
  req.body.googleId = req.user.googleId
  Wishlist.create(req.body, function(err, game) {
    console.log(game)
    res.redirect("/wishlists/index")
  })
}

function removeFromWishlist(req, res) {
  Wishlist.findByIdAndDelete(req.params.id, function(err) {
    console.log(req.params.id)
    res.redirect('/wishlists/index')
  })
}