const Character = require('../models/characters.js');

const getAllFavoriteCharacters = async (req, res) => {
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
};

module.exports = getAllFavoriteCharacters;
