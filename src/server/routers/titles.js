const express = require('express');
const titles = express.Router();

titles.post('/titles', (req, res) => {
    res.sendStatus(200)
});

titles.update('/titles:id', (req, res) => {
    res.sendStatus(200)
});

titles.delete('titles:id', (req, res) => {
    res.sendStatus(200)
});

module.exports = titles;