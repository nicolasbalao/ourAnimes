"use strick";

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Server setup !!");
})

module.exports = app;
