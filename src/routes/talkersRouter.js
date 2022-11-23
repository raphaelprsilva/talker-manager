const express = require('express');

const { readTalkerFile, writeTalkerFile } = require('../utils/fsUtils');
const {
  talkerMiddleware: {
    validateName,
    validateAge,
    validateTalk,
    validateTalkRate,
    validateTalkWatchedAt,
  },
  authenticatesUser,
} = require('../middlewares');

const router = express.Router();

router.get('/', async (_request, response) => {
  const talkers = await readTalkerFile();
  response.status(200).json(talkers);
});

router.get('/search', authenticatesUser, async (request, response) => {
  const { q } = request.query;
  const talkers = await readTalkerFile();
  const filteredTalkers = talkers.filter((t) => t.name.includes(q));

  if (!filteredTalkers.length) {
    return response
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }

  response.status(200).json(filteredTalkers);
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

router.use(authenticatesUser);

router.post(
  '/',
  validateName,
  validateAge,
  validateTalk,
  validateTalkRate,
  validateTalkWatchedAt,
  async (request, response) => {
    const { name, age, talk } = request.body;
    const talkers = await readTalkerFile();
    const newTalker = { id: talkers.length + 1, name, age, talk };

    await writeTalkerFile([...talkers, newTalker]);

    response.status(201).json(newTalker);
  },
);

router.put(
  '/:id',
  validateName,
  validateAge,
  validateTalk,
  validateTalkRate,
  validateTalkWatchedAt,
  async (request, response) => {
    const { id } = request.params;
    const { name, age, talk } = request.body;
    const talkers = await readTalkerFile();
    const talkerIndex = talkers.findIndex((t) => t.id === Number(id));

    if (talkerIndex === -1) {
      return response
        .status(400)
        .json({ message: 'Pessoa palestrante não encontrada' });
    }

    const updatedTalker = { id: Number(id), name, age, talk };
    talkers[talkerIndex] = updatedTalker;

    await writeTalkerFile(talkers);

    response.status(200).json(updatedTalker);
  },
);

router.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const talkers = await readTalkerFile();
  const talkerIndex = talkers.findIndex((t) => t.id === Number(id));

  if (talkerIndex === -1) {
    return response
      .status(400)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }

  talkers.splice(talkerIndex, 1);

  await writeTalkerFile(talkers);

  response.status(204).end();
});

module.exports = router;
