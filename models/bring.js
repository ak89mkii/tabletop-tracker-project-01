const mongoose = require('mongoose');
const Schema = mongoose.Schema


const bringSchema = new Schema({
  googleId: {type: String},
  name: {type: String},
  comments: {type: String},
  datePosted: {type: Date},
}, {
  timestamps: true
});

module.exports = mongoose.model('Bring', bringSchema);