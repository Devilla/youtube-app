const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  id: String,
  title: String,
  description: String,
  privacy: String
});

module.exports = mongoose.model('Video',videoSchema);
