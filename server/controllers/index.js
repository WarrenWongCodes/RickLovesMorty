const Episodes = require('../models/episodes.js');
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
};
