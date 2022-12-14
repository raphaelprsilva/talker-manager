const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');

require('express-async-errors');

const swaggerFile = require('../swagger-output.json');
const { talkersRoutes, loginRoutes } = require('./routes');
const { error } = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.use('/talker', talkersRoutes);
app.use('/login', loginRoutes);

app.use(
  '/doc',
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, {
    swaggerOptions: { persistAuthorization: true },
  }),
);

app.use('/*', (_request, response) => {
  response.status(404).json({ message: 'Página não encontrada' });
});

app.use(error);

module.exports = app;
