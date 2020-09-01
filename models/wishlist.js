const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishlistSchema = new Schema({
    imageUrl: {type: String},
    title: {type: String},
    priority: {type: Boolean},
    price: {type: Number}
}, {
  timestamps: true
})

module.exports = mongoose.model('Wishlist', wishlistSchema)