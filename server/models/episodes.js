const mongoose = require('mongoose');

const episodesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  air_date: String,
  episode: String,
  characters: [String],
  url: String,
  created: String,
});

const Episodes = mongoose.model('Episodes', episodesSchema);

module.exports = Episodes;
