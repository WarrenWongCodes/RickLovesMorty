const axios = require('axios');

const filterCharacters = (category, query) => {
  console.log('=====>', category, query);
  const options = {
    url: `https://rickandmortyapi.com/api/character/?${category}=${query}`,
    method: 'get',
  };

  return axios(options);
};

module.exports = filterCharacters;
