const Episodes = require('../models/episodes.js');
const { getAllEpisodes } = require('../API_Helpers/index.js');

module.exports = {
  retrieveAllEpisodes: async (req, res) => {
    try {
      const { data } = await getAllEpisodes();
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
