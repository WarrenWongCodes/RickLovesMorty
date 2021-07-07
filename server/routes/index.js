const router = require('express').Router();
const {
  retrieveAllEpisodes,
  retrieveAllCharacters,
} = require('../controllers/index.js');

router.get('/episodes', retrieveAllEpisodes);

router.get('/characters', retrieveAllCharacters);

module.exports = router;
