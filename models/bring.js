const mongoose = require('mongoose');
const Schema = mongoose.Schema


const bringSchema = new Schema({
  title: String,
  noPlayers: String,
  whoBring: String,
  comments: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Bring', bringSchema);