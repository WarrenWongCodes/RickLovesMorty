const Episodes = require('../models/episodes.js');
const Character = require('../models/characters.js');
const { getAllEpisodes, getAllCharacters } = require('../API_Helpers/index.js');

module.exports = {
  retrieveAllEpisodes: async (req, res) => {
    try {
      const { data } = await getAllEpisodes();
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  retrieveAllCharacters: async (req, res) => {
    const pageNum = req.query.pageNum;
    try {
      const { data } = await getAllCharacters(pageNum);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  addFavoriteCharacter: async (req, res) => {
    try {
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
      } = req.body;

      const response = await Character.create({
        id,
        name,
        status,
        species,
        type,
        gender,
        origin: JSON.stringify(origin),
        location: JSON.stringify(location),
        image,
        episode,
        url,
        created,
      });

      res.status(200).send('Successfully added to favorites');
    } catch (err) {
      res.status(400).json(err);
    }
  },
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
};
