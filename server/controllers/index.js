const Episodes = require('../models/episodes.js');
const Character = require('../models/characters.js');
const retrieveAllEpisodes = require('./retrieveAllEpisodes.js');
const retrieveAllCharacters = require('./retrieveAllCharacters.js');
const addFavoriteCharacter = require('./addFavoriteCharacter.js');
const { filterCharacters } = require('../API_Helpers/index.js');

module.exports = {
  retrieveAllEpisodes,
  retrieveAllCharacters,
  addFavoriteCharacter,
  getAllFavoriteCharacters: async (req, res) => {
    try {
      const response = await Character.find({});
      res.status(200).json(
        response.map((character) => {
          const {
            id,
            name,
            status,
            species,
            type,
            gender,
            origin,
            location,
            image,
            episode,
            url,
            created,
          } = character;

          return {
            id,
            name,
            status,
            species,
            type,
            gender,
            origin: JSON.parse(origin),
            location: JSON.parse(location),
            image,
            episode,
            url,
            created,
          };
        })
      );
    } catch (err) {
      console.log(err);
    }
  },
  deleteFavoriteCharacter: async (req, res) => {
    try {
      await Character.findOneAndDelete({ name: req.body.name });
      res.send(200).send('Successfully deleted favorite');
    } catch (err) {
      res.send(400).json(err);
    }
  },
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
