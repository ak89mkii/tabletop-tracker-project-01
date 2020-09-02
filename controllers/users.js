const User = require('../models/user');
const Game = require('../models/game');

module.exports = {
  index,
};

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { user: req.user, users })
  })
}