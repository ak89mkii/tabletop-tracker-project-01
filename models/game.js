const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    title: String,
    slug: String,
    rawgId: Number,
    released: Date,
    imageUrl: String,
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)