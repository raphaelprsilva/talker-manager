const express = require('express');

const { generateToken } = require('../utils/setToken');
const { validateEmail, validatePassword } = require('../middlewares');

const router = express.Router();

router.post('/', validateEmail, validatePassword, async (request, response) => {
  const token = generateToken();
  response.status(200).json({ token });
});

module.exports = router;
