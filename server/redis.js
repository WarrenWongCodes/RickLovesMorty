const redis = require('redis');

const redisClient = redis.createClient();

redisClient.on('error', (error) => console.error(error));

module.exports = redisClient;
