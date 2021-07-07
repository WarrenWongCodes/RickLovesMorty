const express = require('express');
const morgan = require('morgan');
const db = require('./db/index.js');
const app = express();
const port = 4000;
const router = require('./routes/index.js');

app.use(express.json());
app.use(morgan('dev'));

app.use('/', router);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
