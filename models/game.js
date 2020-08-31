const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    imageUrl: {type: String},
    title: {type: String},
    min: {type: Number},
    max: {type: Number},
    link: {type: String}
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