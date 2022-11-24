const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Talker Manager API',
    description: 'This is the API for the Talker Manager',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
