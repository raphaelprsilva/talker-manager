const validateName = (request, response, next) => {
  const { name } = request.body;
  const nameRequiredMinLength = 3;

  if (!name) {
    return response
      .status(400)
      .json({ message: 'O campo "name" é obrigatório' });
  }

  if (name.length < nameRequiredMinLength) {
    return response.status(400).json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }

  next();
};

const validateAge = (request, response, next) => {
  const { age } = request.body;
  const ageRequiredMinLength = 18;

  if (!age) {
    return response
      .status(400)
      .json({ message: 'O campo "age" é obrigatório' });
  }

  if (age < ageRequiredMinLength) {
    return response.status(400).json({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }

  next();
};

const validateTalkWatchedAt = (request, response, next) => {
  const { talk } = request.body;
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
  const isValidDate = dateRegex.test(talk.watchedAt);

  if (!talk.watchedAt) {
    return response.status(400).json({
      message: 'O campo "watchedAt" é obrigatório',
    });
  }

  if (!isValidDate) {
    return response.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }

  next();
};

const validateTalkRate = (request, response, next) => {
  const { talk } = request.body;

  if (talk.rate < 1 || talk.rate > 5) {
    return response.status(400).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }

  if (!talk.rate) {
    return response.status(400).json({
      message: 'O campo "rate" é obrigatório',
    });
  }

  next();
};

const validateTalk = (request, response, next) => {
  const { talk } = request.body;

  if (!talk) {
    return response
      .status(400)
      .json({ message: 'O campo "talk" é obrigatório' });
  }

  next();
};

module.exports = {
  validateName,
  validateAge,
  validateTalk,
  validateTalkWatchedAt,
  validateTalkRate,
};
