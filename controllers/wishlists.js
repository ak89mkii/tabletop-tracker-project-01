const User = require('../models/wishlist')

module.exports = {
    new: newWishlists
}

function newWishlists(req, res) {
    User.find({})
    .then(users => {
      res.render('wishlists/new', { user: req.user, users })
    })
}