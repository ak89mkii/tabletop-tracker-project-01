const Bring = require('../models/bring');

module.exports = {
    index,
    create,
    deleteComment
};

function index(req, res) {
  Bring.find({})
  .then(users => {
    res.render('brings/index', { user: req.user, users })
    })
}

function deleteComment(req, res) {
  Bring.findByIdAndDelete(req.params.id, function(err) {
    console.log(req.params.id)
    res.redirect('/brings/index')
  })
}

function create(req, res) {
  req.body.name = req.user.name
  Bring.create(req.body, function(err, comment) {
    console.log(comment)
    res.redirect("/brings/index")
  })
}
  