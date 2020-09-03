const Vote = require('../models/vote')

module.exports = {
    create  
}

function create(req, res) {
    req.body.user = req.params.id
    Vote.create(req.body, function(err, vote) {
      console.log(vote)
      res.redirect('/votes/index')
    })
  }

// function create(req, res) {
//     Vote.findById(req.params.id, function(err, comment) {
//         comment.comments.push(req.body)
//         console.log(vote)
//         comment.save(function(err) {
//             res.redirect('/votes/index/')
//         })
//     })
// }

