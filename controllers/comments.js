const Vote = require('../models/vote')

module.exports = {
    
    create
    
}

function create(req, res) {
    Vote.findById(req.params.id, function(err, comment) {
        comment.comments.push(req.body)
        console.log(vote)
        comment.save(function(err) {
            res.redirect(`/flights/${comment._id}`)
        })
    })
}