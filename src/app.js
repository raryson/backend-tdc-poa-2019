const express = require("express");
const HttpStatus = require("http-status");
const cors = require("./middlewares/cors");
const app = express();

let talks = [];

app.use(express.json());
app.use(cors);

app.get("/talk", (req, res) => {
  res.json(talks);
});

app.post("/talk", (req, res) => {
  const {
    title,
    summary,
    message,
    messageForCommitte,
    language,
    type,
    track
  } = req.body;
  talks.push({
    title,
    summary,
    message,
    messageForCommitte,
    language,
    type,
    track
  });
  res.sendStatus(HttpStatus.CREATED);
});

app.delete("/talk", (req, res) => {
  talks = [];
  res.sendStatus(HttpStatus.ACCEPTED);
});

if (process.env.PACT_MODE === "true") {
  app.post("/provider-state", (req, res) => {
    const consumer = req.query["consumer"];
    const providerState = req.query["state"];
    res.send(
      `changed to provider state "${providerState}" for consumer "${consumer}"`
    );
    res.status(200);
  });
}

module.exports = app;
