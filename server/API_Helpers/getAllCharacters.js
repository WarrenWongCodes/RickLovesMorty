const axios = require('axios');

const getAllCharacters = () => {
  const options = {
    url: 'https://rickandmortyapi.com/api/character',
    method: 'get',
  };

  return axios(options);
};

module.exports = getAllCharacters;
