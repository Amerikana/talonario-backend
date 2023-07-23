const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const { router } = require('./routes');
const { errorHandler } = require('./errors/index');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middlewares/credentials');

config();

const app = express();

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());

app.get('/health-check', (_, res) => {
  res.send('server Ok');
});

app.use('/api', router);

app.use(errorHandler);

module.exports = app;
