const router = require('express').Router();
const {
  retrieveAllEpisodes,
  retrieveAllCharacters,
  getAllFavoriteCharacters,
  addFavoriteCharacter,
  deleteFavoriteCharacter,
  filterAllCharacters,
} = require('../controllers/index.js');

router.get('/episodes', retrieveAllEpisodes);

router.get('/characters', retrieveAllCharacters);

router.get('/favorites', getAllFavoriteCharacters);

router.get('/filter', filterAllCharacters);

router.post('/character', addFavoriteCharacter);

router.delete('/character', deleteFavoriteCharacter);

module.exports = router;
