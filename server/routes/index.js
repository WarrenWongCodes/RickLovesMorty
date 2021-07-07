const router = require('express').Router();
const {
  retrieveAllEpisodes,
  retrieveAllCharacters,
  getAllFavoriteCharacters,
  addFavoriteCharacter,
  deleteFavoriteCharacter,
} = require('../controllers/index.js');

router.get('/episodes', retrieveAllEpisodes);

router.get('/characters', retrieveAllCharacters);

router.get('/favorites', getAllFavoriteCharacters);

router.post('/character', addFavoriteCharacter);

router.delete('/character', deleteFavoriteCharacter);

module.exports = router;
