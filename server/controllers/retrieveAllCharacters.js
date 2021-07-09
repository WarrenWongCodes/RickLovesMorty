const { getAllCharacters } = require('../API_Helpers/index.js');

const retrieveAllCharacters = async (req, res) => {
  const pageNum = req.query.pageNum;
  try {
    const { data } = await getAllCharacters(pageNum);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = retrieveAllCharacters;
