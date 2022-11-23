const express = require('express');
require('express-async-errors');

const bodyParser = require('body-parser');

const { talkersRoutes, loginRoutes } = require('./routes');
const { error } = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.use('/talker', talkersRoutes);
app.use('/login', loginRoutes);

app.use('/*', (_request, response) => {
  response.status(404).json({ message: 'Página não encontrada' });
});

app.use(error);

module.exports = app;
