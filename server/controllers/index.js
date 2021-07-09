const Episodes = require('../models/episodes.js');
const Character = require('../models/characters.js');
const retrieveAllEpisodes = require('./retrieveAllEpisodes.js');
const retrieveAllCharacters = require('./retrieveAllCharacters.js');
const addFavoriteCharacter = require('./addFavoriteCharacter.js');
const getAllFavoriteCharacters = require('./getAllFavoriteCharacters.js');
const deleteFavoriteCharacter = require('./deleteFavoriteCharacter.js');
const { filterCharacters } = require('../API_Helpers/index.js');

module.exports = {
  retrieveAllEpisodes,
  retrieveAllCharacters,
  addFavoriteCharacter,
  getAllFavoriteCharacters,
  deleteFavoriteCharacter,
  filterAllCharacters: async (req, res) => {
    const { category, query } = req.query;
    try {
      const { data } = await filterCharacters(category, query);
      res.status(200).json(data);
    } catch (err) {
      res.send(400).json(err);
    }
  },
};
