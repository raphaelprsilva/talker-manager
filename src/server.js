const app = require('./app');
// const connection = require('./db/connection');

const HTTP_OK_STATUS = 200;
const PORT = 3001;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log(`Online on port ${PORT}`);
});
