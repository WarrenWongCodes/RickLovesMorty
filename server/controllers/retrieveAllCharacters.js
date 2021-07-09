const { getAllCharacters } = require('../API_Helpers/index.js');
const redisClient = require('../redis.js');
const DEFAULT_EXPIRATION = 1800;

const retrieveAllCharacters = async (req, res) => {
  const pageNum = req.query.pageNum;
  redisClient.get(`characters?pageNum=${pageNum}`, async (err, characters) => {
    try {
      if (characters !== null) {
        console.log('cache hit!');
        return res.status(200).json(JSON.parse(characters));
      } else {
        console.log('cache missed');
        const { data } = await getAllCharacters(pageNum);
        redisClient.setex(
          `characters?pageNum=${pageNum}`,
          DEFAULT_EXPIRATION,
          JSON.stringify(data)
        );
        res.status(200).json(data);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  });
};

module.exports = retrieveAllCharacters;
