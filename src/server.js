const app = require('./app');
const { readTalkerFile } = require('./utils/fsUtils');

const HTTP_OK_STATUS = 200;
const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_request, response) => {
  const talkers = await readTalkerFile();
  response.status(HTTP_OK_STATUS).json(talkers);
});

app.listen(PORT, () => {
  console.log(`Online on port ${PORT}`);
});
