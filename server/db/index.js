const mongoose = require('mongoose');
const url = 'mongodb://mongo:27017/rickandmorty';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => console.log('MongoDB connected!'));

module.exports = db;
