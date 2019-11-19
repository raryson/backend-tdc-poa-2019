const express = require('express');
const HttpStatus = require('http-status');
const cors = require('./middlewares/cors');
const app = express();

let talks = [];

app.use(express.json());
app.use(cors);

app.get('/talk', (req, res) => {
  res.json(talks);
});

app.post('/talk', (req, res) => {
  const { title, summary, message, messageForCommitte, language, type, track } = req.body;
  talks.push({ title, summary, message, messageForCommitte, language, type, track });
  res.sendStatus(HttpStatus.CREATED);
});

app.delete('/talk', (req, res) => {
  talks = []
  res.sendStatus(HttpStatus.ACCEPTED);
});

module.exports = app;
