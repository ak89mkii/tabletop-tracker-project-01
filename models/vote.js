const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voteSchema = new Schema({
  googleId: {type: String},
  imageUrl: {type: String},
  title: {type: String},
  datePosted: {type: Date},
  vote: {type: Number},
  comments: {type: String}
}, {
timestamps: true
})

module.exports = mongoose.model('Vote', voteSchema)