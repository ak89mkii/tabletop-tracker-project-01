const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    title: String,
    minPlayers: Number,
    maxPlayers: Number,
    slug: String,
    gameId: Number,
    rank: Number,
    image: String,
    name: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)

// const gameSchema = new Schema({
//   title: String,
//   slug: String,
//   rawgId: Number,
//   released: Date,
//   imageUrl: String,
// }, {
// timestamps: true
// })