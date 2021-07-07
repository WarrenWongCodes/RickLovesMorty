const axios = require('axios');

const getAllEpisodes = () => {
  const options = {
    url: 'https://rickandmortyapi.com/api/episode',
    method: 'get',
  };

  return axios(options);
};

module.exports = getAllEpisodes;
