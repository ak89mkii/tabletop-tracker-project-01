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
// { user: req.user, users })

function create(req, res) {
  const wish = new Wishlist(req.body)
  wish.save(function(err) {
    console.log(wish)
    res.redirect('/wishlists/index')
  })
}

function removeFromWishlist(req, res) {
  Wishlist.findByIdAndDelete(req.params.id, function(err) {
    console.log(req.params.id)
    res.redirect('/wishlists/index')
  })
}