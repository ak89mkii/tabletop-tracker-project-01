const Bring = require('../models/bring');

module.exports = {
    index,
    create
};

function index(req, res) {
  Bring.find({})
  .then(users => {
    res.render('brings/index', { user: req.user, users })
    })
}

// function create(req, res) {
//   const bring = new Bring(req.body)
//   bring.save(function(err) {
//     console.log(bring)
//     res.render('brings/index', {  })
//   })
// }

function create(req, res) {
  req.body.name = req.user.name
  Bring.create(req.body, function(err, comment) {
    console.log(comment)
    res.redirect("/brings/index")
  })
}
  