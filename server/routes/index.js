const router = require('express').Router();
const {
  retrieveAllEpisodes,
  retrieveAllCharacters,
  addFavoriteCharacter,
} = require('../controllers/index.js');

router.get('/episodes', retrieveAllEpisodes);

router.get('/characters', retrieveAllCharacters);

router.post('/character', addFavoriteCharacter);

module.exports = router;
