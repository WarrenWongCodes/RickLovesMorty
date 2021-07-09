const { filterCharacters } = require('../API_Helpers/index.js');

const filterAllCharacters = async (req, res) => {
  const { category, query } = req.query;
  try {
    const { data } = await filterCharacters(category, query);
    res.status(200).json(data);
  } catch (err) {
    res.send(400).json(err);
  }
};

module.exports = filterAllCharacters;
