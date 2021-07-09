const Episodes = require('../models/episodes.js');
const Character = require('../models/characters.js');
const retrieveAllEpisodes = require('./retrieveAllEpisodes.js');
const retrieveAllCharacters = require('./retrieveAllCharacters.js');
const addFavoriteCharacter = require('./addFavoriteCharacter.js');
const getAllFavoriteCharacters = require('./getAllFavoriteCharacters.js');
const deleteFavoriteCharacter = require('./deleteFavoriteCharacter.js');
const filterAllCharacters = require('./filterAllCharacters.js');

module.exports = {
  retrieveAllEpisodes,
  retrieveAllCharacters,
  addFavoriteCharacter,
  getAllFavoriteCharacters,
  deleteFavoriteCharacter,
  filterAllCharacters,
};
