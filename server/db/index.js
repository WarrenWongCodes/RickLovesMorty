const mongoose = require('mongoose');
require('dotenv').config();
const url = `mongodb://${process.env.DB_CONFIG}/rickandmorty`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => console.log('MongoDB connected!'));

module.exports = db;
