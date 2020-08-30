const User = require('../models/bring');

module.exports = {
    new: newBring,
};

function newBring(req, res) {
  User.find({})
  .then(users => {
    res.render('brings/new', { user: req.user, users })
  })
}