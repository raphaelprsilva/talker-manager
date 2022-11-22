const express = require('express');
const bodyParser = require('body-parser');

const { talkersRoutes, loginRoutes } = require('./routes');

const app = express();
app.use(bodyParser.json());

app.use('/talker', talkersRoutes);
app.use('/login', loginRoutes);

module.exports = app;
