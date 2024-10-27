const express = require('express');
const logger = require('./logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  logger.info('Home route accessed', {path: req.path});
  res.send('Home route accessed, Hello from NodeJS!');
});

app.get('/error', (req, res) => {
  logger.error('An error occurred with NodeJS!', { path: req.path});
  res.status(500).send('An error occured!');
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});