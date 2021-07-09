const Character = require('../models/characters.js');

const getAllFavoriteCharacter = async (req, res) => {
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
};

module.exports = getAllFavoriteCharacter;
