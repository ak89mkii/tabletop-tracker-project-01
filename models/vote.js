const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = new Schema ({
  comments: {type: String}
}, {
  timestamps: true
})

const voteSchema = new Schema({
  imageUrl: {type: String},
  title: {type: String},
  datePosted: {type: Date},
  vote: {type: Number},
  comments: [commentsSchema]
}, {
timestamps: true
})

module.exports = mongoose.model('Vote', voteSchema)