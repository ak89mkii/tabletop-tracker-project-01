const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishlistSchema = new Schema({
    imageUrl: {type: String},
    title: {type: String},
    priority: {type: String, enum: ['Must Purchase', 'Vote on It', 'Not Priority', 'Wait for Sale']},
    cost: {type: Number}
}, {
  timestamps: true
})

module.exports = mongoose.model('Wishlist', wishlistSchema)