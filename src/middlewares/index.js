const talkerMiddleware = require('./talkerMiddleware');
const loginMiddleware = require('./loginMiddleware');
const authenticatesUser = require('./authMiddleware');
const error = require('./errorMiddleware');

module.exports = {
  talkerMiddleware,
  loginMiddleware,
  authenticatesUser,
  error,
};
