const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    page: String,
    googleId: {type: String},
    imageUrl: {type: String},
    title: {type: String},
    min: {type: Number},
    max: {type: Number},
    link: {type: String},
    name: {type: String}
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)

