const router = require('express').Router();
const { retrieveAllEpisodes } = require('../controllers/index.js');

router.get('/episodes', retrieveAllEpisodes);

module.exports = router;
