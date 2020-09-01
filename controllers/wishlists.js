const Wishlist = require('../models/wishlist')

module.exports = {
    index,
    create,
    removeFromWishlist
}

function index(req, res) {
    Wishlist.find({})
    .then(users => {
      res.render('/wishlists/', { user: req.user, users })
    })
}

function create(req, res) {
  const wish = new Wishlist(req.body)
  wish.save(function(err) {
    console.log(wish)
    res.redirect('/wishlists/')
  })
}

function removeFromWishlist(req, res) {
  Game.findByIdAndDelete(req.params.id, function(err) {
    console.log(req.params.id)
    res.redirect('/wishlists/')
  })
}