const Character = require('../models/characters.js');

const deleteFavoriteCharacter = async (req, res) => {
  try {
    await Character.findOneAndDelete({ name: req.body.name });
    res.send(200).send('Successfully deleted favorite');
  } catch (err) {
    res.send(400).json(err);
  }
};

module.exports = deleteFavoriteCharacter;
