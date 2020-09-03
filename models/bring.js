const mongoose = require('mongoose');
const Schema = mongoose.Schema


const bringSchema = new Schema({
  comments: {type: String},
}, {
  timestamps: true
});

module.exports = mongoose.model('Bring', bringSchema);