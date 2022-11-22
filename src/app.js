const express = require('express');
const bodyParser = require('body-parser');

const talkersRoutes = require('./routes/talkersRouter');
const loginRoutes = require('./routes/loginRouter');

const app = express();
app.use(bodyParser.json());

app.use('/talker', talkersRoutes);
app.use('/login', loginRoutes);

module.exports = app;
