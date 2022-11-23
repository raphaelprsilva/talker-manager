const talkerMiddleware = require('./talkerMiddleware');
const loginMiddleware = require('./loginMiddleware');
const authenticatesUser = require('./authMiddleware');

module.exports = {
  talkerMiddleware,
  loginMiddleware,
  authenticatesUser,
};
