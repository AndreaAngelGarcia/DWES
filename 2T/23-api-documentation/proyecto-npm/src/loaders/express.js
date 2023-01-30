const express = require('express');

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../openai/swagger.json');
const routes = require('../routes');

module.exports = server => {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  server.use(routes);
  server.use((req, res) => res.status(404).send({ message: 'Not Found' }));
};
