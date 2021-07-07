const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db/index.js');
const app = express();
const port = 4000;
const router = require('./routes/index.js');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(__dirname + '/../public'));

app.use('/', router);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
