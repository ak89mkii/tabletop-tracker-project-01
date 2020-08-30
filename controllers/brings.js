const Bring = require('../models/bring');

module.exports = {
    new: newBring,
};

function newBring(req, res) {
    Bring.find({})
  .then(users => {
    res.render('brings/new', { user: req.user, users })
  })
}