const router = require('express').Router();
const {
  retrieveAllEpisodes,
  retrieveAllCharacters,
  getAllFavoriteCharacters,
  addFavoriteCharacter,
} = require('../controllers/index.js');

router.get('/episodes', retrieveAllEpisodes);

router.get('/characters', retrieveAllCharacters);

router.get('/favorites', getAllFavoriteCharacters);

router.post('/character', addFavoriteCharacter);

module.exports = router;
