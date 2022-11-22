const express = require('express');
const bodyParser = require('body-parser');

const talkersRoutes = require('./routes/talkersRouter');

const app = express();
app.use(bodyParser.json());

app.use('/talker', talkersRoutes);

module.exports = app;
