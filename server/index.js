const express = require('express');
const morgan = require('morgan');
const db = require('./db/index.js');
const app = express();
const port = 4000;

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
