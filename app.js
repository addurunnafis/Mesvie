const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const config = require('./config/database');
const routes = require('./routes');

// Mongoose Connection
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();

// Middleware
app.use(cors({ credentials: true }));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './resource')));
app.use(bodyParser.json());

app.use('/mesvie', routes);

module.exports = app;