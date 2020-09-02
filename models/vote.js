const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voteSchema = new Schema({
  title: {type: String},
  vote: {type: Number},
  comments: {type: String}
}, {
timestamps: true
})

module.exports = mongoose.model('Vote', voteSchema)