const validateEmail = (request, response, next) => {
  const { email } = request.body;
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const isValidEmail = emailRegex.test(email);

  if (!email) {
    return response
      .status(400)
      .json({ message: 'O campo "email" é obrigatório' });
  }

  if (!isValidEmail) {
    return response.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }

  next();
};

const validatePassword = (request, response, next) => {
  const { password } = request.body;
  const passwordRequiredMinLength = 6;

  if (!password) {
    return response
      .status(400)
      .json({ message: 'O campo "password" é obrigatório' });
  }

  if (password.length < passwordRequiredMinLength) {
    return response.status(400).json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }

  next();
};

module.exports = {
  validateEmail,
  validatePassword,
};
