const Wishlist = require('../models/wishlist')

module.exports = {
    new: newWishlists
}

function newWishlists(req, res) {
    Wishlist.find({})
    .then(users => {
      res.render('wishlists/new', { user: req.user, users })
    })
}