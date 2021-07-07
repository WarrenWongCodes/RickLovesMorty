const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
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
