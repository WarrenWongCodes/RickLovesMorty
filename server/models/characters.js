const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  id: Number,
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: String,
  location: String,
  image: String,
  episode: [String],
  url: String,
  created: String,
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
