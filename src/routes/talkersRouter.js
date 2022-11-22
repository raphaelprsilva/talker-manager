const express = require('express');
const { readTalkerFile } = require('../utils/fsUtils');

const router = express.Router();

router.get('/', async (_request, response) => {
  const talkers = await readTalkerFile();
  response.status(200).json(talkers);
});

module.exports = router;
