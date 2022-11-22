const express = require('express');
const { readTalkerFile } = require('../utils/fsUtils');

const router = express.Router();

router.get('/', async (_request, response) => {
  const talkers = await readTalkerFile();
  response.status(200).json(talkers);
});

router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const talkers = await readTalkerFile();
  const talker = talkers.find((t) => t.id === Number(id));

  if (!talker) {
    return response
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  response.status(200).json(talker);
});

module.exports = router;
