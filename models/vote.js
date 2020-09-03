const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = new Schema ({
  say: {type: String}
}, {
  timestamps: true
})

const voteSchema = new Schema({
  imageUrl: {type: String},
  title: {type: String},
  datePosted: {type: Date},
  vote: {type: Number},
  comments: {type: String}
}, {
timestamps: true
})

module.exports = mongoose.model('Vote', voteSchema)