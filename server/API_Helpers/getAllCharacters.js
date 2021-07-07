const axios = require('axios');

const getAllCharacters = (pageNum = 1) => {
  const options = {
    url: `https://rickandmortyapi.com/api/character/?page=${pageNum}`,
    method: 'get',
  };

  return axios(options);
};

module.exports = getAllCharacters;
