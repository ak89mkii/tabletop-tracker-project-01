const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voteSchema = new Schema({
    title: String,
    slug: String,
    rawgId: Number,
    released: Date,
    imageUrl: String,
}, {
  timestamps: true
})

module.exports = mongoose.model('Vote', voteSchema)