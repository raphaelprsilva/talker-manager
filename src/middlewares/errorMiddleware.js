const error = (err, _request, response, _next) => {
  console.error(err);
  response.status(500).json({
    error: {
      message: err.message,
    },
  });
};

module.exports = error;
